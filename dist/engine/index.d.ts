/**
 * Engine layer — barrel exports
 */
export { SceneEngine, type SceneEngineOptions } from './SceneEngine';
export { CameraRig } from './CameraRig';
export { ObjectLib } from './ObjectLib';
export { LightSystem } from './LightSystem';
export { PathSystem } from './PathSystem';
export { RayPicker, type PickResult, type PickTarget } from './RayPicker';
export { calcFOV, calcDOF, calcFOVByPreset, deg2rad, rad2deg, generateId, clamp, lerp, easeInOutCubic, sampleActorAtTime, sampleCameraPathAtTime, } from './calc';
export { ActorRig } from './ActorRig';
export { Viewfinder, type ViewfinderMode, type ViewfinderRenderContext } from './Viewfinder';
