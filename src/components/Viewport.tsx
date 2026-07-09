/**
 * Viewport — The 3D rendering canvas container.
 *
 * Initializes the Three.js SceneEngine and all engine modules.
 * Connects engine state to the Zustand store.
 */

import React, { useEffect, useRef } from 'react'
import {
  SceneEngine,
  CameraRig,
  ObjectLib,
  LightSystem,
  PathSystem,
  RayPicker,
  ActorRig,
} from '../engine'
import { generateId } from '../engine/calc'
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
    actorRig: ActorRig
  } | null>(null)

  // Track actor drag state: { id, historyPushed }
  // - On first pick (pointerdown): just select, set dragRef
  // - On subsequent picks (pointermove during drag): update position
  // - History is pushed only once, on the first actual movement
  const dragRef = useRef<{ id: string; historyPushed: boolean } | null>(null)

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
    const actorRig = new ActorRig(scene.scene)

    rayPicker.setCameraGroups(cameraRig.getAllMeshGroups())
    rayPicker.setObjectMeshes(objectLib.getAllMeshes())
    rayPicker.setActorGroups(actorRig.getAllMeshGroups())
    rayPicker.enable(scene.getCanvas())

    // Set up PNG exporter for output manager
    outputManager.setPNGExporter(() => scene.exportPNGBlob())

    // Ray picker → store sync
    rayPicker.onPick((result) => {
      const state = store.getState()
      const tool = state.tool

      // Path tool mode: click ground to add path keyframe
      if (tool === 'path' && result.target === 'ground' && result.groundPoint) {
        const selCamId = state.selectedCameraId
        const selActorId = state.selectedActorId

        if (selActorId) {
          // Add actor keyframe at clicked position
          const actor = state.project.actors.find(a => a.id === selActorId)
          if (actor) {
            state.addActorKeyframe(selActorId, {
              id: generateId(),
              time: state.project.timeline.currentTime,
              position: { x: result.groundPoint.x, y: 0, z: result.groundPoint.z },
              rotation: { ...actor.rotation },
              action: 'stand',
            })
          }
        } else if (selCamId) {
          // Add camera path point
          state.addPathPoint({
            id: generateId(),
            position: { x: result.groundPoint.x, y: 1.6, z: result.groundPoint.z },
            rotation: { yaw: 0, pitch: 0, roll: 0 },
            cameraId: selCamId,
            t: 0,
          })
        }
        return
      }

      // Normal selection / drag mode
      if (result.target === 'camera' && result.id) {
        store.getState().selectCamera(result.id)
        outputManager.emit('camera:select', result.id)
      } else if (result.target === 'object' && result.id) {
        store.getState().selectObject(result.id)
      } else if (result.target === 'actor' && result.id) {
        if (!dragRef.current || dragRef.current.id !== result.id) {
          // First pick (pointerdown) — select and prepare for potential drag
          dragRef.current = { id: result.id, historyPushed: false }
          store.getState().selectActor(result.id)
        } else {
          // Same actor — this is a drag move
          if (result.groundPoint) {
            const actor = store.getState().project.actors.find(a => a.id === result.id)
            if (actor) {
              const dx = result.groundPoint.x - actor.position.x
              const dz = result.groundPoint.z - actor.position.z
              if (Math.abs(dx) > 0.01 || Math.abs(dz) > 0.01) {
                // First actual movement — push history once for the whole drag
                if (!dragRef.current.historyPushed) {
                  store.getState().snapshot()
                  dragRef.current.historyPushed = true
                }
                // Update position without history (live drag)
                store.getState().setActorPosition(result.id, {
                  x: result.groundPoint.x,
                  y: 0,
                  z: result.groundPoint.z,
                })
              }
            }
          }
        }
      } else {
        // Clicked on ground or nothing — reset drag state
        dragRef.current = null
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
      actorRig,
    }

    return () => {
      scene.dispose()
      engineRef.current = null
    }
  }, [outputManager])

  // Sync store → engine
  const project = store(s => s.project)
  const selectedCameraId = store(s => s.selectedCameraId)
  const selectedActorId = store(s => s.selectedActorId)

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


    // Sync actors
    const storeActors = project.actors
    const engineActors = engine.actorRig.getAllActors()
    const engineActorIds = new Set(engineActors.map(a => a.id))
    const storeActorIds = new Set(storeActors.map(a => a.id))

    let actorsChanged = false
    for (const actor of storeActors) {
      if (!engineActorIds.has(actor.id)) {
        engine.actorRig.addActor(actor)
        actorsChanged = true
      } else {
        const existing = engine.actorRig.getActor(actor.id)
        if (existing && (
          existing.name !== actor.name ||
          existing.role !== actor.role ||
          existing.height !== actor.height ||
          existing.color !== actor.color ||
          existing.position.x !== actor.position.x ||
          existing.position.y !== actor.position.y ||
          existing.position.z !== actor.position.z ||
          existing.rotation.yaw !== actor.rotation.yaw ||
          existing.keyframes.length !== actor.keyframes.length
        )) {
          engine.actorRig.updateActor(actor.id, actor)
          actorsChanged = true
        }
      }
    }
    for (const id of engineActorIds) {
      if (!storeActorIds.has(id)) {
        engine.actorRig.deleteActor(id)
        actorsChanged = true
      }
    }

    // Refresh rayPicker's actor groups so new/deleted actors are pickable
    if (actorsChanged) {
      engine.rayPicker.setActorGroups(engine.actorRig.getAllMeshGroups())
    }

    // Sync actor selection
    engine.actorRig.selectActor(selectedActorId)

    // Sync path → PathSystem
    engine.pathSystem.importKeyframes(project.path)

    // Sync lighting
    engine.lightSystem.update(project.scene.lighting)
  }, [project.cameras, project.actors, project.path, project.scene.lighting, selectedCameraId, selectedActorId])

  // Sync grid/axes visibility
  const showGrid = store(s => s.showGrid)
  const showAxes = store(s => s.showAxes)

  useEffect(() => {
    engineRef.current?.scene.setGridVisible(showGrid)
  }, [showGrid])

  useEffect(() => {
    engineRef.current?.scene.setAxesVisible(showAxes)
  }, [showAxes])

  // Timeline playback: update actor positions based on current time
  const timelineTime = store(s => s.project.timeline.currentTime)

  useEffect(() => {
    engineRef.current?.actorRig.updatePlayback(timelineTime)
  }, [timelineTime])

  // Cursor style based on tool
  const tool = store(s => s.tool)

  return (
    <div
      ref={containerRef}
      className={css.cameraPlannerViewport}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        cursor: tool === 'path' ? 'crosshair' : 'default',
      }}
    />
  )
}
