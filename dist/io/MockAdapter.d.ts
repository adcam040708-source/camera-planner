import { InputManager } from './InputManager';
import { OutputManager } from './OutputManager';
import { ProjectData } from '../types/project';
import { Camera } from '../types/camera';
export declare class MockAdapter {
    private projects;
    private autoSaveTimer;
    private STORAGE_KEY;
    constructor();
    /** Wire up to InputManager and OutputManager for bidirectional sync */
    init(input: InputManager, output: OutputManager): void;
    /** Load a project (or create empty) and push to InputManager */
    loadProject(projectId: string, input: InputManager): ProjectData;
    /** Save current planner state */
    saveProject(projectId: string, output: OutputManager): void;
    /** Get a project by ID */
    getProject(projectId: string): ProjectData | undefined;
    /** List all saved project IDs */
    listProjects(): string[];
    /** Delete a project */
    deleteProject(projectId: string): boolean;
    /** Simulate API: save camera */
    saveCamera(projectId: string, camera: Camera): void;
    /** Simulate API: delete camera */
    deleteCamera(projectId: string, cameraId: string): void;
    private scheduleAutoSave;
    private persistToStorage;
    private loadFromStorage;
}
