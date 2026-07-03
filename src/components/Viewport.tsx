/**
 * Viewport — The 3D rendering canvas container.
 *
 * Initializes the Three.js SceneEngine and all engine modules.
 * Connects engine state to the Zustand store.
 */

import React, { useEffect, useRef, useCallback } from 'react'
import {
  SceneEngine,
  CameraRig,
  ObjectLib,
  LightSystem,
  PathSystem,
  RayPicker,
} from '../engine'
import { usePlannerStore } from '../store/usePlannerStore'
import { OutputManager } from '../io/OutputManager'
import css from '../styles.module.css'

interface ViewportProps {
  outputManager: OutputManager
}

export const Viewport: React.FC<ViewportProps> = ({ outputManager }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const engineRef = useRef<{
    scene: SceneEngine
    cameraRig: CameraRig
    objectLib: ObjectLib
    lightSystem: LightSystem
    pathSystem: PathSystem
    rayPicker: RayPicker
  } | null>(null)

  const store = usePlannerStore

  // Initialize engine
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new SceneEngine({
      container,
      antialias: true,
      shadows: true,
      showGrid: true,
      showAxes: true,
    })

    const cameraRig = new CameraRig(scene.scene)
    const objectLib = new ObjectLib(scene.scene)
    const lightSystem = new LightSystem(scene.scene)
    const pathSystem = new PathSystem(scene.scene)
    const rayPicker = new RayPicker(scene.camera, scene.scene)

    rayPicker.setCameraGroups(cameraRig.getAllMeshGroups())
    rayPicker.setObjectMeshes(objectLib.getAllMeshes())
    rayPicker.enable(scene.getCanvas())

    // Set up PNG exporter for output manager
    outputManager.setPNGExporter(() => scene.exportPNGBlob())

    // Ray picker → store sync
    rayPicker.onPick((result) => {
      if (result.target === 'camera' && result.id) {
        store.getState().selectCamera(result.id)
        outputManager.emit('camera:select', result.id)
      } else if (result.target === 'object' && result.id) {
        store.getState().selectObject(result.id)
      }
    })

    scene.start()

    engineRef.current = {
      scene,
      cameraRig,
      objectLib,
      lightSystem,
      pathSystem,
      rayPicker,
    }

    return () => {
      scene.dispose()
      engineRef.current = null
    }
  }, [outputManager])

  // Sync store → engine
  const project = store(s => s.project)
  const selectedCameraId = store(s => s.selectedCameraId)

  useEffect(() => {
    const engine = engineRef.current
    if (!engine) return

    // Sync cameras
    const storeCameras = project.cameras
    const engineCameras = engine.cameraRig.getAllCameras()
    const engineIds = new Set(engineCameras.map(c => c.id))
    const storeIds = new Set(storeCameras.map(c => c.id))

    // Add new cameras
    for (const cam of storeCameras) {
      if (!engineIds.has(cam.id)) {
        engine.cameraRig.addCamera(cam)
      }
    }
    // Remove deleted cameras
    for (const id of engineIds) {
      if (!storeIds.has(id)) {
        engine.cameraRig.deleteCamera(id)
      }
    }
    // Update changed cameras
    for (const cam of storeCameras) {
      const existing = engine.cameraRig.getCamera(cam.id)
      if (existing && (
        existing.focal !== cam.focal ||
        existing.position.x !== cam.position.x ||
        existing.position.y !== cam.position.y ||
        existing.position.z !== cam.position.z
      )) {
        engine.cameraRig.updateCamera(cam.id, cam)
      }
    }

    // Sync selection
    engine.cameraRig.selectCamera(selectedCameraId)

    // Sync lighting
    engine.lightSystem.update(project.scene.lighting)
  }, [project.cameras, project.scene.lighting, selectedCameraId])

  // Sync grid/axes visibility
  const showGrid = store(s => s.showGrid)
  const showAxes = store(s => s.showAxes)

  useEffect(() => {
    engineRef.current?.scene.setGridVisible(showGrid)
  }, [showGrid])

  useEffect(() => {
    engineRef.current?.scene.setAxesVisible(showAxes)
  }, [showAxes])

  return (
    <div
      ref={containerRef}
      className={css.cameraPlannerViewport}
      style={{ width: '100%', height: '100%', minHeight: '400px' }}
    />
  )
}
