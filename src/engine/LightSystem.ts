/**
 * LightSystem — Scene lighting control with presets.
 *
 * Manages the main directional light and a fill light.
 * Supports position, intensity, color, and preset switching.
 */

import * as THREE from 'three'
import { LightingConfig } from '../types/scene'
import { LIGHT_PRESETS } from '../presets/lights'

export class LightSystem {
  private scene: THREE.Scene
  private mainLight: THREE.DirectionalLight
  private fillLight: THREE.PointLight
  private helper: THREE.DirectionalLightHelper | null = null
  private config: LightingConfig

  constructor(scene: THREE.Scene) {
    this.scene = scene

    // Main directional light (sun/key light)
    this.mainLight = new THREE.DirectionalLight(0xfff5e0, 1.2)
    this.mainLight.position.set(10, 20, 10)
    this.mainLight.castShadow = true
    this.mainLight.shadow.mapSize.width = 2048
    this.mainLight.shadow.mapSize.height = 2048
    this.mainLight.shadow.camera.near = 0.5
    this.mainLight.shadow.camera.far = 60
    this.mainLight.shadow.camera.left = -20
    this.mainLight.shadow.camera.right = 20
    this.mainLight.shadow.camera.top = 20
    this.mainLight.shadow.camera.bottom = -20
    scene.add(this.mainLight)

    // Fill light (softer, from opposite side)
    this.fillLight = new THREE.PointLight(0x6688cc, 0.3, 50)
    this.fillLight.position.set(-8, 8, -8)
    scene.add(this.fillLight)

    this.config = {
      position: { x: 10, y: 20, z: 10 },
      intensity: 1.2,
      color: 0xfff5e0,
      preset: 'daylight',
    }
  }

  /** Apply a named preset */
  applyPreset(name: string): void {
    const preset = LIGHT_PRESETS.find(p => p.name === name)
    if (!preset) return

    this.config = {
      position: { ...preset.position },
      intensity: preset.intensity,
      color: preset.color,
      preset: name,
    }

    this.mainLight.position.set(preset.position.x, preset.position.y, preset.position.z)
    this.mainLight.intensity = preset.intensity
    this.mainLight.color.setHex(preset.color)
  }

  /** Update lighting config */
  update(config: Partial<LightingConfig>): LightingConfig {
    if (config.position) {
      this.config.position = config.position
      this.mainLight.position.set(config.position.x, config.position.y, config.position.z)
    }
    if (config.intensity !== undefined) {
      this.config.intensity = config.intensity
      this.mainLight.intensity = config.intensity
    }
    if (config.color !== undefined) {
      this.config.color = config.color
      this.mainLight.color.setHex(config.color)
    }
    if (config.preset) {
      this.config.preset = config.preset
    }

    return { ...this.config }
  }

  /** Get current config */
  getConfig(): LightingConfig {
    return { ...this.config }
  }

  /** Show/hide light helper in scene */
  setHelperVisible(visible: boolean): void {
    if (visible && !this.helper) {
      this.helper = new THREE.DirectionalLightHelper(this.mainLight, 2)
      this.scene.add(this.helper)
    }
    if (this.helper) {
      this.helper.visible = visible
    }
  }

  /** Clean up */
  dispose(): void {
    if (this.helper) {
      this.scene.remove(this.helper)
      this.helper.dispose()
    }
    this.scene.remove(this.mainLight)
    this.scene.remove(this.fillLight)
  }
}
