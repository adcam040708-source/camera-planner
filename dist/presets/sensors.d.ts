import { SensorPreset } from '../types/camera';
export declare const SENSOR_PRESETS: SensorPreset[];
export declare function getSensorPreset(name: string): SensorPreset | undefined;
export declare function getSensorByDimensions(w: number, h: number): SensorPreset | undefined;
