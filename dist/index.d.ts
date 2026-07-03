/**
 * @muraguchi/camera-planner
 *
 * 3D Camera Position Planner — npm component for the Muraguchi AI film platform.
 *
 * Usage:
 *   import { CameraPlanner } from '@muraguchi/camera-planner'
 *   import '@muraguchi/camera-planner/dist/style.css'
 *
 *   <CameraPlanner
 *     projectId="abc123"
 *     apiUrl="/api/camera-planner"
 *     onCameraChange={handleCameraChange}
 *   />
 */
export { CameraPlanner, type CameraPlannerProps, inputManager, outputManager } from './components/CameraPlanner';
export { SceneEngine, CameraRig, ObjectLib, LightSystem, PathSystem, RayPicker, calcFOV, calcDOF, calcFOVByPreset, deg2rad, rad2deg, generateId, clamp, lerp, easeInOutCubic, } from './engine';
export { InputManager, OutputManager, ApiClient } from './io';
export { usePlannerStore } from './store/usePlannerStore';
export type { Camera, Position3D, Rotation3D, SensorPreset, DOFResult, MovementConfig, MovementType, ScriptBinding, SceneConfig, SceneObject, ObjectType, LightingConfig, SceneTemplate, ProjectData, PathPoint, StoryboardConfig, StoryboardCell, TimelineConfig, TimelineKeyframe, PlannerEventMap, PlannerEvent, EventHandler, } from './types';
export { createEmptyProject } from './types';
export { SENSOR_PRESETS, MOVEMENT_PRESETS, LIGHT_PRESETS, SCENE_PRESETS } from './presets';
