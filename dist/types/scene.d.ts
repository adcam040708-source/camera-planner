import { Position3D, Rotation3D } from './camera';
export interface SceneObject {
    id: string;
    type: ObjectType;
    position: Position3D;
    rotation: Rotation3D;
    scale: Position3D;
    color: number;
}
export type ObjectType = 'box' | 'sphere' | 'cone' | 'cylinder' | 'torus' | 'plane' | 'person' | 'building' | 'car' | 'tree' | 'prop';
export interface LightingConfig {
    position: Position3D;
    intensity: number;
    color: number;
    preset: string;
}
export interface SceneConfig {
    template: SceneTemplate;
    objects: SceneObject[];
    lighting: LightingConfig;
}
export type SceneTemplate = 'studio' | 'living_room' | 'street' | 'cafe' | 'empty';
