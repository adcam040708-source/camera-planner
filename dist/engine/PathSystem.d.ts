import { PathPoint } from '../types/project';
/**
 * PathSystem — Camera movement path with keyframe interpolation.
 *
 * Defines a series of keyframes that a camera follows during playback.
 * Supports position and rotation interpolation with easing.
 */
import * as THREE from 'three';
export declare class PathSystem {
    private scene;
    private keyframes;
    private line;
    private markers;
    constructor(scene: THREE.Scene);
    /** Add a keyframe */
    addKeyframe(params: Partial<PathPoint> & {
        position: {
            x: number;
            y: number;
            z: number;
        };
    }): PathPoint;
    /** Remove a keyframe */
    removeKeyframe(id: string): boolean;
    /** Get all keyframes */
    getKeyframes(): PathPoint[];
    /** Clear all keyframes */
    clearAll(): void;
    /** Get interpolated position and rotation at time t (0-1) */
    sample(t: number): {
        position: {
            x: number;
            y: number;
            z: number;
        };
        rotation: {
            yaw: number;
            pitch: number;
            roll: number;
        };
    } | null;
    /** Import keyframes from array */
    importKeyframes(points: PathPoint[], cameraId?: string | null): void;
    private recalcT;
    private refreshVisualization;
    /** Visual objects to hide in viewfinder */
    getVisualObjects(): THREE.Object3D[];
    /** Clean up */
    dispose(): void;
}
