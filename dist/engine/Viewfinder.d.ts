import { Camera } from '../types/camera';
/**
 * Viewfinder — Picture-in-picture camera monitor for AI / metric QA.
 *
 * Renders a clean 16:9 feed from the selected planner camera,
 * with RGB / depth modes. Hides helper geometry during aux render.
 */
import * as THREE from 'three';
export type ViewfinderMode = 'rgb' | 'depth';
export interface ViewfinderRenderContext {
    selectedCamera: Camera | null;
    /** Objects to hide while rendering the PiP (cones, grid, axes, paths, bones…) */
    helpers: THREE.Object3D[];
    /** Optional first-actor position for distance readout */
    actorPosition?: {
        x: number;
        y: number;
        z: number;
    } | null;
}
export declare class Viewfinder {
    readonly camera: THREE.PerspectiveCamera;
    readonly renderer: THREE.WebGLRenderer;
    private scene;
    private depthMaterial;
    private mode;
    private lastInfo;
    constructor(scene: THREE.Scene, canvas: HTMLCanvasElement);
    setMode(mode: ViewfinderMode): void;
    getMode(): ViewfinderMode;
    getLastInfo(): string;
    render(ctx: ViewfinderRenderContext): string;
    dispose(): void;
    private syncCamera;
    private buildInfo;
}
