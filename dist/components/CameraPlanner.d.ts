import { default as React } from 'react';
import { InputManager } from '../io/InputManager';
import { OutputManager } from '../io/OutputManager';
import { ProjectData } from '../types/project';
import { Camera } from '../types/camera';
export interface CameraPlannerProps {
    projectId?: string;
    apiUrl?: string;
    token?: string;
    initialData?: ProjectData;
    onCameraChange?: (camera: Camera) => void;
    onCameraSelect?: (id: string) => void;
    onCameraAdd?: (camera: Camera) => void;
    onCameraDelete?: (id: string) => void;
    onSceneChange?: (scene: unknown) => void;
    onProjectExport?: (data: ProjectData) => void;
}
declare const inputManager: InputManager;
declare const outputManager: OutputManager;
export { inputManager, outputManager };
export declare const CameraPlanner: React.FC<CameraPlannerProps>;
