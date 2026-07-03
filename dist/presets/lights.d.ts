export interface LightPreset {
    name: string;
    label: string;
    color: number;
    intensity: number;
    position: {
        x: number;
        y: number;
        z: number;
    };
}
export declare const LIGHT_PRESETS: LightPreset[];
