/**
 * RayPicker — Raycasting for object/camera selection and drag interaction.
 *
 * Handles mouse/touch ray casting against scene objects and camera meshes.
 * Supports: click-to-select, hover highlight, drag-to-move on the ground plane.
 */
import * as THREE from 'three';
export type PickTarget = 'camera' | 'object' | 'ground' | null;
export interface PickResult {
    target: PickTarget;
    id: string | null;
    point: THREE.Vector3;
    groundPoint: THREE.Vector3 | null;
}
export declare class RayPicker {
    private camera;
    private scene;
    private raycaster;
    private mouse;
    private groundPlane;
    private onPickCallback;
    private onHoverCallback;
    private isDragging;
    private dragTarget;
    private dragPlane;
    private dragOffset;
    private cameraGroups;
    private objectMeshes;
    constructor(camera: THREE.Camera, scene: THREE.Scene);
    /** Set the camera groups that can be picked */
    setCameraGroups(groups: THREE.Group[]): void;
    /** Set the object meshes that can be picked */
    setObjectMeshes(meshes: THREE.Object3D[]): void;
    /** Enable picking on a canvas element */
    enable(canvas: HTMLElement): void;
    /** Disable picking */
    disable(canvas: HTMLElement): void;
    /** Register pick callback */
    onPick(callback: (result: PickResult) => void): void;
    /** Register hover callback */
    onHover(callback: (result: PickResult | null) => void): void;
    private onPointerDown;
    private onPointerMove;
    private onPointerUp;
    private updateMouse;
    private raycast;
    private getWorldPosition;
}
