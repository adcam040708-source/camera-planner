/**
 * Viewfinder — Picture-in-picture camera monitor for AI / metric QA.
 *
 * Renders a clean 16:9 feed from the selected planner camera,
 * with RGB / depth modes. Hides helper geometry during aux render.
 */

import * as THREE from 'three'
import { Camera } from '../types/camera'
import { deg2rad, calcFOV } from './calc'

export type ViewfinderMode = 'rgb' | 'depth'

export interface ViewfinderRenderContext {
  selectedCamera: Camera | null
  /** Objects to hide while rendering the PiP (cones, grid, axes, paths, bones…) */
  helpers: THREE.Object3D[]
  /** Optional first-actor position for distance readout */
  actorPosition?: { x: number; y: number; z: number } | null
}

export class Viewfinder {
  readonly camera: THREE.PerspectiveCamera
  readonly renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private depthMaterial: THREE.MeshDepthMaterial
  private mode: ViewfinderMode = 'rgb'
  private lastInfo = '未选择机位'

  constructor(scene: THREE.Scene, canvas: HTMLCanvasElement) {
    this.scene = scene
    this.camera = new THREE.PerspectiveCamera(50, 16 / 9, 0.1, 200)
    this.camera.rotation.order = 'YXZ'
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(256, 144, false)
    this.renderer.setClearColor(0x000000, 1)
    this.depthMaterial = new THREE.MeshDepthMaterial()
  }

  setMode(mode: ViewfinderMode): void {
    this.mode = mode
  }

  getMode(): ViewfinderMode {
    return this.mode
  }

  getLastInfo(): string {
    return this.lastInfo
  }

  render(ctx: ViewfinderRenderContext): string {
    if (!ctx.selectedCamera) {
      this.renderer.clear()
      this.lastInfo = '未选择机位'
      return this.lastInfo
    }

    const c = ctx.selectedCamera
    this.syncCamera(c)
    this.lastInfo = this.buildInfo(c, ctx.actorPosition)

    const visibility = ctx.helpers.map(obj => {
      const prev = obj.visible
      obj.visible = false
      return { obj, prev }
    })

    const prevOverride = this.scene.overrideMaterial
    const prevBg = this.scene.background
    const prevFog = this.scene.fog

    try {
      if (this.mode === 'depth') {
        this.scene.overrideMaterial = this.depthMaterial
        this.scene.background = new THREE.Color(0x000000)
        this.scene.fog = null
      }
      this.renderer.render(this.scene, this.camera)
    } finally {
      this.scene.overrideMaterial = prevOverride
      this.scene.background = prevBg
      this.scene.fog = prevFog
      for (const { obj, prev } of visibility) obj.visible = prev
    }

    return this.lastInfo
  }

  dispose(): void {
    this.depthMaterial.dispose()
    this.renderer.dispose()
  }

  private syncCamera(c: Camera): void {
    // Prefer store FOV; if stale, derive from focal so focal slider always affects PiP
    this.camera.fov = c.fov > 0 ? c.fov : calcFOV(c.sensorH || 24, c.focal || 50)
    this.camera.aspect = 16 / 9
    this.camera.near = 0.1
    this.camera.far = 200
    this.camera.position.set(c.position.x, c.position.y, c.position.z)
    this.camera.rotation.set(
      deg2rad(c.rotation.pitch),
      deg2rad(c.rotation.yaw),
      deg2rad(c.rotation.roll)
    )
    this.camera.updateProjectionMatrix()
  }

  private buildInfo(
    c: Camera,
    actorPos?: { x: number; y: number; z: number } | null
  ): string {
    let text = `${c.name} | 焦距: ${c.focal}mm`
    const sizeHint = c.script?.description || c.script?.shotId
    const size = formatShotSize(sizeHint)
    if (size) text += ` | 景别: ${size}`
    if (actorPos) {
      const dx = c.position.x - actorPos.x
      const dy = c.position.y - actorPos.y
      const dz = c.position.z - actorPos.z
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
      text += ` | 距角色: ${dist.toFixed(1)}m`
    }
    return text
  }
}

function formatShotSize(label?: string): string {
  if (!label) return 'WS'
  const m = String(label).match(/\(([A-Z]+)\)/)
  if (m) return m[1]
  if (/特写|ECU/i.test(label)) return 'ECU'
  if (/近景|CU/i.test(label)) return 'CU'
  if (/中景|MS/i.test(label)) return 'MS'
  if (/全景|WS/i.test(label)) return 'WS'
  return ''
}
