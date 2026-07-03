import { Camera } from './camera';
import { SceneConfig } from './scene';
import { ProjectData, StoryboardConfig } from './project';
export type PlannerEventMap = {
    'camera:change': Camera;
    'camera:select': string;
    'camera:add': Camera;
    'camera:delete': string;
    'scene:change': SceneConfig;
    'project:export': ProjectData;
    'storyboard:change': StoryboardConfig;
    'timeline:change': number;
    'object:add': string;
    'object:delete': string;
    'movement:play': {
        cameraId: string;
        type: string;
    };
    'undo': void;
    'redo': void;
};
export type PlannerEvent = keyof PlannerEventMap;
export type EventHandler<T> = (data: T) => void;
