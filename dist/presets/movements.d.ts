import { MovementType } from '../types/camera';
export interface MovementPreset {
    type: MovementType;
    label: string;
    labelEn: string;
    description: string;
    defaultDuration: number;
}
export declare const MOVEMENT_PRESETS: MovementPreset[];
