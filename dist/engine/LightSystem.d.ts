import { LightingConfig } from '../types/scene';
/**
 * LightSystem — Scene lighting control with presets.
 *
 * Manages the main directional light and a fill light.
 * Supports position, intensity, color, and preset switching.
 */
import * as THREE from 'three';
export declare class LightSystem {
    private scene;
    private mainLight;
    private fillLight;
    private helper;
    private config;
    constructor(scene: THREE.Scene);
    /** Apply a named preset */
    applyPreset(name: string): void;
    /** Update lighting config */
    update(config: Partial<LightingConfig>): LightingConfig;
    /** Get current config */
    getConfig(): LightingConfig;
    /** Show/hide light helper in scene */
    setHelperVisible(visible: boolean): void;
    /** Clean up */
    dispose(): void;
}
