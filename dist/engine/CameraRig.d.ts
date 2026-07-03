import { Camera, Position3D, Rotation3D } from '../types/camera';
/**
 * CameraRig — Camera cone visualization and management.
 *
 * Each "camera" in the planner is represented as a 3D cone (frustum visualization)
 * with a position, rotation, and optical properties. This module handles:
 * - Creating/updating/deleting camera 3D objects
 * - Visualizing FOV as cone angle
 * - Highlighting selected camera
 * - Displaying camera name labels
 */
import * as THREE from 'three';
export declare class CameraRig {
    private scene;
    private cameras;
    private selectedId;
    constructor(scene: THREE.Scene);
    /** Add a new camera to the scene */
    addCamera(params?: Partial<Camera>): Camera;
    /** Update camera parameters and refresh 3D visualization */
    updateCamera(id: string, params: Partial<Camera>): Camera | null;
    /** Delete a camera */
    deleteCamera(id: string): boolean;
    /** Select a camera by ID */
    selectCamera(id: string | null): void;
    /** Get selected camera ID */
    getSelectedId(): string | null;
    /** Get camera data by ID */
    getCamera(id: string): Camera | null;
    /** Get all cameras */
    getAllCameras(): Camera[];
    /** Get 3D group for a camera (used by RayPicker) */
    getMeshGroup(id: string): THREE.Group | null;
    /** Get all mesh groups (used by RayPicker) */
    getAllMeshGroups(): THREE.Group[];
    /** Set camera position directly (e.g., from drag) */
    setCameraPosition(id: string, position: Position3D): void;
    /** Set camera rotation (e.g., from property panel) */
    setCameraRotation(id: string, rotation: Rotation3D): void;
    /** Clear all cameras */
    clearAll(): void;
    private createCameraMesh;
    private highlightCamera;
}
