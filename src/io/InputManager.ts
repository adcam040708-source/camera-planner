/**
 * InputManager — Receives data from the Muraguchi host project.
 *
 * This is the "input pipe" — the host project pushes data in through here.
 * The InputManager normalizes data and dispatches it to the Zustand store.
 */

import { Camera, MovementType } from '../types/camera'
import { SceneConfig } from '../types/scene'
import { ProjectData } from '../types/project'
import { ScriptBinding } from '../types/camera'
import { usePlannerStore } from '../store/usePlannerStore'

export class InputManager {
  /** Load a complete project */
  loadProject(data: ProjectData): void {
    usePlannerStore.getState().loadProject(data)
  }

  /** Load only cameras (replace all) */
  loadCameras(cameras: Camera[]): void {
    const store = usePlannerStore.getState()
    const project = store.getProjectData()
    store.loadProject({ ...project, cameras })
  }

  /** Load only scene config */
  loadScene(scene: SceneConfig): void {
    usePlannerStore.getState().setSceneConfig(scene)
  }

  /** Load script binding for a specific camera */
  loadScript(cameraId: string, script: ScriptBinding): void {
    usePlannerStore.getState().updateCamera(cameraId, { script })
  }

  /** Update a single camera's params */
  updateCamera(id: string, params: Partial<Camera>): void {
    usePlannerStore.getState().updateCamera(id, params)
  }

  /** Update scene config partially */
  updateScene(params: Partial<SceneConfig>): void {
    usePlannerStore.getState().setSceneConfig(params)
  }

  /** Select a camera (from external control) */
  selectCamera(id: string): void {
    usePlannerStore.getState().selectCamera(id)
  }

  /** Trigger a movement animation on a camera */
  playMovement(cameraId: string, type: MovementType): void {
    const store = usePlannerStore.getState()
    const camera = store.project.cameras.find(c => c.id === cameraId)
    if (!camera) return

    // Set movement config on the camera
    store.updateCamera(cameraId, {
      movement: { type, duration: 3 },
    })
  }
}
