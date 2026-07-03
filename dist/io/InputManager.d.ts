import { Camera, ScriptBinding } from '../types/camera';
import { SceneConfig } from '../types/scene';
import { ProjectData } from '../types/project';
export declare class InputManager {
    /** Load a complete project */
    loadProject(data: ProjectData): void;
    /** Load only cameras (replace all) */
    loadCameras(cameras: Camera[]): void;
    /** Load only scene config */
    loadScene(scene: SceneConfig): void;
    /** Load script binding for a specific camera */
    loadScript(cameraId: string, script: ScriptBinding): void;
    /** Update a single camera's params */
    updateCamera(id: string, params: Partial<Camera>): void;
    /** Update scene config partially */
    updateScene(params: Partial<SceneConfig>): void;
    /** Select a camera (from external control) */
    selectCamera(id: string): void;
}
