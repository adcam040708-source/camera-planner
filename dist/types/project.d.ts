import { Camera } from './camera';
import { SceneConfig } from './scene';
export interface ProjectData {
    version: string;
    cameras: Camera[];
    scene: SceneConfig;
    path: PathPoint[];
    storyboard: StoryboardConfig;
    timeline: TimelineConfig;
}
export interface PathPoint {
    id: string;
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
    cameraId?: string;
    t: number;
}
export interface StoryboardConfig {
    grid: '3x3' | '5x5';
    cells: StoryboardCell[];
}
export interface StoryboardCell {
    index: number;
    cameraId?: string;
    label?: string;
    thumbnail?: string;
}
export interface TimelineConfig {
    duration: number;
    currentTime: number;
    playing: boolean;
    keyframes: TimelineKeyframe[];
}
export interface TimelineKeyframe {
    id: string;
    time: number;
    cameraId: string;
    type: string;
    value: unknown;
}
export declare function createEmptyProject(): ProjectData;
