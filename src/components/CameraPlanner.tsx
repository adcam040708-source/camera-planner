/**
 * CameraPlanner — Main entry React component.
 *
 * This is the component that gets imported by the Muraguchi host project.
 * It renders the full planner UI (viewport + panels).
 */

import React, { useEffect, useRef } from 'react'
import { Viewport } from './Viewport'
import { usePlannerStore } from '../store/usePlannerStore'
import { InputManager } from '../io/InputManager'
import { OutputManager } from '../io/OutputManager'
import { ProjectData } from '../types/project'
import { Camera } from '../types/camera'

export interface CameraPlannerProps {
  /** Project ID for API calls */
  projectId?: string
  /** Muraguchi API base URL */
  apiUrl?: string
  /** Auth token */
  token?: string
  /** Initial project data (optional, can also be loaded via API) */
  initialData?: ProjectData
  /** Callbacks */
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
  projectId,
  apiUrl,
  token,
  initialData,
  onCameraChange,
  onCameraSelect,
  onCameraAdd,
  onCameraDelete,
  onSceneChange,
  onProjectExport,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

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

  return (
    <div ref={containerRef} className="camera-planner">
      <Viewport outputManager={outputManager} />
    </div>
  )
}
