import { SceneTemplate, SceneObject } from '../types/scene';
export interface ScenePreset {
    template: SceneTemplate;
    label: string;
    labelEn: string;
    icon: string;
    objects: Omit<SceneObject, 'id'>[];
}
export declare const SCENE_PRESETS: ScenePreset[];
