/**
 * CameraPlanner — Main entry React component.
 *
 * 5-panel layout:
 *   A: TopToolbar (top)
 *   B: Sidebar (left)
 *   C: Viewport (center)
 *   D: PropertyPanel (right)
 *   E: BottomPanel (bottom)
 */

import React, { useEffect, useState } from 'react'
import { Viewport } from './Viewport'
import { TopToolbar } from './TopToolbar'
import { Sidebar } from './Sidebar'
import { PropertyPanel } from './PropertyPanel'
import { BottomPanel } from './BottomPanel'
import { ExportDialog } from './ExportDialog'
import { usePlannerStore } from '../store/usePlannerStore'
import { InputManager } from '../io/InputManager'
import { OutputManager } from '../io/OutputManager'
import { ProjectData } from '../types/project'
import { Camera } from '../types/camera'
import css from '../styles.module.css'

export interface CameraPlannerProps {
  projectId?: string
  apiUrl?: string
  token?: string
  initialData?: ProjectData
  onCameraChange?: (camera: Camera) => void
  onCameraSelect?: (id: string) => void
  onCameraAdd?: (camera: Camera) => void
  onCameraDelete?: (id: string) => void
  onSceneChange?: (scene: unknown) => void
  onProjectExport?: (data: ProjectData) => void
}

// Singleton I/O managers
const inputManager = new InputManager()
const outputManager = new OutputManager()

export { inputManager, outputManager }

export const CameraPlanner: React.FC<CameraPlannerProps> = ({
  initialData,
  onCameraChange,
  onCameraSelect,
  onCameraAdd,
  onCameraDelete,
  onSceneChange,
  onProjectExport,
}) => {
  const [exportOpen, setExportOpen] = useState(false)

  // Load initial data
  useEffect(() => {
    if (initialData) {
      inputManager.loadProject(initialData)
    }
  }, [initialData])

  // Wire up output callbacks
  useEffect(() => {
    const unsubs: (() => void)[] = []
    if (onCameraChange) unsubs.push(outputManager.on('camera:change', onCameraChange))
    if (onCameraSelect) unsubs.push(outputManager.on('camera:select', onCameraSelect))
    if (onCameraAdd) unsubs.push(outputManager.on('camera:add', onCameraAdd))
    if (onCameraDelete) unsubs.push(outputManager.on('camera:delete', onCameraDelete))
    if (onSceneChange) unsubs.push(outputManager.on('scene:change', onSceneChange as (data: unknown) => void))
    if (onProjectExport) unsubs.push(outputManager.on('project:export', onProjectExport))
    return () => unsubs.forEach(u => u())
  }, [onCameraChange, onCameraSelect, onCameraAdd, onCameraDelete, onSceneChange, onProjectExport])

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'z') {
        e.preventDefault()
        usePlannerStore.getState().undo()
      }
      if (e.ctrlKey && e.key === 'y') {
        e.preventDefault()
        usePlannerStore.getState().redo()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className={css.cameraPlanner}>
      {/* A: Top Toolbar */}
      <TopToolbar onExport={() => setExportOpen(true)} />

      {/* Main content area: B + C + D */}
      <div className={css.cpMain}>
        {/* B: Left Sidebar */}
        <Sidebar />

        {/* C: Center Viewport */}
        <div className={css.cpViewportWrapper}>
          <Viewport outputManager={outputManager} />
        </div>

        {/* D: Right Property Panel */}
        <PropertyPanel />
      </div>

      {/* E: Bottom Panel */}
      <BottomPanel />

      {/* Export Dialog */}
      <ExportDialog open={exportOpen} onClose={() => setExportOpen(false)} />
    </div>
  )
}
