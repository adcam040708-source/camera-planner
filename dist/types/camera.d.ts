export interface Position3D {
    x: number;
    y: number;
    z: number;
}
export interface Rotation3D {
    yaw: number;
    pitch: number;
    roll: number;
}
export interface SensorPreset {
    name: string;
    label: string;
    w: number;
    h: number;
}
export interface DOFResult {
    near: number;
    far: number;
    range: number;
}
export interface MovementConfig {
    type: MovementType;
    duration: number;
    start?: Position3D;
    end?: Position3D;
    startRotation?: Rotation3D;
    endRotation?: Rotation3D;
}
export type MovementType = 'push' | 'pull' | 'pan' | 'tilt' | 'track' | 'orbit' | 'crane_up' | 'crane_down';
export interface ScriptBinding {
    sceneId?: string;
    shotId?: string;
    description?: string;
    dialogue?: string;
    action?: string;
}
export interface Camera {
    id: string;
    name: string;
    focal: number;
    sensorW: number;
    sensorH: number;
    fstop: number;
    focusDist: number;
    height: number;
    position: Position3D;
    rotation: Rotation3D;
    fov: number;
    dof: DOFResult;
    color: number;
    movement?: MovementConfig;
    script?: ScriptBinding;
}
