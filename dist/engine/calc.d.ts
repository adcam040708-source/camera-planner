import { DOFResult } from '../types/camera';
/**
 * Calculate Field of View (vertical) in degrees.
 * Formula: 2 * atan(sensorHeight / (2 * focalLength)) * 180 / PI
 */
export declare function calcFOV(sensorHeight: number, focalLength: number): number;
/**
 * Calculate Depth of Field using hyperfocal distance formula.
 *
 * @param focalLength - in mm
 * @param fstop - f-number (e.g. 2.8)
 * @param focusDist - focus distance in meters
 * @param sensorHeight - sensor height in mm
 * @param coc - circle of confusion multiplier (default 0.03mm for full-frame equivalent)
 */
export declare function calcDOF(focalLength: number, fstop: number, focusDist: number, sensorHeight: number, coc?: number): DOFResult;
/**
 * Calculate FOV for a named sensor preset.
 */
export declare function calcFOVByPreset(presetName: string, focalLength: number): number;
/**
 * Convert degrees to radians.
 */
export declare function deg2rad(degrees: number): number;
/**
 * Convert radians to degrees.
 */
export declare function rad2deg(radians: number): number;
/**
 * Generate a short unique ID.
 */
export declare function generateId(): string;
/**
 * Clamp a number between min and max.
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Linear interpolation between two values.
 */
export declare function lerp(a: number, b: number, t: number): number;
/**
 * Ease in-out cubic for smooth animation.
 */
export declare function easeInOutCubic(t: number): number;
