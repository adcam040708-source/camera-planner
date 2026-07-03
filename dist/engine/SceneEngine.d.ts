import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
/**
 * SceneEngine — Three.js scene initialization and management.
 *
 * Handles: renderer, scene, camera, controls, grid, axes, resize, animation loop.
 * This is the foundation that all other engine modules build on top of.
 */
import * as THREE from 'three';
export interface SceneEngineOptions {
    container: HTMLElement;
    antialias?: boolean;
    shadows?: boolean;
    backgroundColor?: number;
    gridSize?: number;
    showGrid?: boolean;
    showAxes?: boolean;
}
export declare class SceneEngine {
    readonly scene: THREE.Scene;
    readonly camera: THREE.PerspectiveCamera;
    readonly renderer: THREE.WebGLRenderer;
    readonly controls: OrbitControls;
    private container;
    private animationId;
    private gridHelper;
    private axesHelper;
    private resizeObserver;
    private frameCallbacks;
    private clock;
    constructor(options: SceneEngineOptions);
    /** Start the animation loop */
    start(): void;
    /** Stop the animation loop */
    stop(): void;
    /** Register a callback to run every frame */
    onFrame(callback: (delta: number) => void): () => void;
    /** Toggle grid visibility */
    setGridVisible(visible: boolean): void;
    /** Toggle axes visibility */
    setAxesVisible(visible: boolean): void;
    /** Export current viewport as PNG data URL */
    exportPNG(): string;
    /** Export current viewport as PNG Blob */
    exportPNGBlob(): Promise<Blob | null>;
    /** Get the canvas element */
    getCanvas(): HTMLCanvasElement;
    /** Clean up all resources */
    dispose(): void;
    private onResize;
}
