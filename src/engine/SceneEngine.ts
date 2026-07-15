/**
 * SceneEngine — Three.js scene initialization and management.
 *
 * Handles: renderer, scene, camera, controls, grid, axes, resize, animation loop.
 * This is the foundation that all other engine modules build on top of.
 */

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export interface SceneEngineOptions {
  container: HTMLElement
  antialias?: boolean
  shadows?: boolean
  backgroundColor?: number
  gridSize?: number
  showGrid?: boolean
  showAxes?: boolean
}

export class SceneEngine {
  readonly scene: THREE.Scene
  readonly camera: THREE.PerspectiveCamera
  readonly renderer: THREE.WebGLRenderer
  readonly controls: OrbitControls

  private container: HTMLElement
  private animationId: number | null = null
  private gridHelper: THREE.GridHelper | null = null
  private axesHelper: THREE.AxesHelper | null = null
  private resizeObserver: ResizeObserver
  private frameCallbacks: Array<(delta: number) => void> = []
  private clock: THREE.Clock

  constructor(options: SceneEngineOptions) {
    const {
      container,
      antialias = true,
      shadows = true,
      backgroundColor = 0x0a0a14,
      gridSize = 20,
      showGrid = true,
      showAxes = true,
    } = options

    this.container = container
    this.clock = new THREE.Clock()

    // Scene
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(backgroundColor)
    this.scene.fog = new THREE.FogExp2(backgroundColor, 0.015)

    // Camera
    const aspect = container.clientWidth / container.clientHeight || 1
    this.camera = new THREE.PerspectiveCamera(55, aspect, 0.1, 500)
    this.camera.position.set(12, 10, 12)
    this.camera.lookAt(0, 0, 0)

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias,
      preserveDrawingBuffer: true, // needed for PNG export
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(container.clientWidth, container.clientHeight)
    if (shadows) {
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    }
    container.appendChild(this.renderer.domElement)

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.08
    this.controls.maxPolarAngle = Math.PI * 0.48
    this.controls.minDistance = 2
    this.controls.maxDistance = 80

    // Grid
    if (showGrid) {
      this.gridHelper = new THREE.GridHelper(gridSize, gridSize, 0x1e1e38, 0x14142a)
      this.scene.add(this.gridHelper)
    }

    // Axes
    if (showAxes) {
      this.axesHelper = new THREE.AxesHelper(3)
      this.scene.add(this.axesHelper)
    }

    // Ambient light (base)
    const ambient = new THREE.AmbientLight(0x404060, 0.3)
    this.scene.add(ambient)

    // Resize observer
    this.resizeObserver = new ResizeObserver(() => this.onResize())
    this.resizeObserver.observe(container)
  }

  /** Start the animation loop */
  start(): void {
    if (this.animationId !== null) return
    this.clock.start()
    const loop = () => {
      this.animationId = requestAnimationFrame(loop)
      const delta = this.clock.getDelta()
      this.frameCallbacks.forEach(cb => cb(delta))
      this.controls.update()
      this.renderer.render(this.scene, this.camera)
    }
    loop()
  }

  /** Stop the animation loop */
  stop(): void {
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId)
      this.animationId = null
    }
  }

  /** Register a callback to run every frame */
  onFrame(callback: (delta: number) => void): () => void {
    this.frameCallbacks.push(callback)
    return () => {
      const idx = this.frameCallbacks.indexOf(callback)
      if (idx >= 0) this.frameCallbacks.splice(idx, 1)
    }
  }

  /** Toggle grid visibility */
  setGridVisible(visible: boolean): void {
    if (this.gridHelper) this.gridHelper.visible = visible
  }

  /** Toggle axes visibility */
  setAxesVisible(visible: boolean): void {
    if (this.axesHelper) this.axesHelper.visible = visible
  }

  /** Helper objects for aux views (viewfinder) to temporarily hide */
  getHelperObjects(): THREE.Object3D[] {
    const out: THREE.Object3D[] = []
    if (this.gridHelper) out.push(this.gridHelper)
    if (this.axesHelper) out.push(this.axesHelper)
    return out
  }

  /** Export current viewport as PNG data URL */
  exportPNG(): string {
    this.renderer.render(this.scene, this.camera)
    return this.renderer.domElement.toDataURL('image/png')
  }

  /** Export current viewport as PNG Blob */
  exportPNGBlob(): Promise<Blob | null> {
    return new Promise((resolve) => {
      this.renderer.render(this.scene, this.camera)
      this.renderer.domElement.toBlob((blob) => resolve(blob), 'image/png')
    })
  }

  /** Get the canvas element */
  getCanvas(): HTMLCanvasElement {
    return this.renderer.domElement
  }

  /** Clean up all resources */
  dispose(): void {
    this.stop()
    this.resizeObserver.disconnect()
    this.controls.dispose()
    this.renderer.dispose()
    this.frameCallbacks = []

    // Remove canvas from DOM
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)
    }

    // Dispose scene objects
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose()
        if (Array.isArray(object.material)) {
          object.material.forEach(m => m.dispose())
        } else {
          object.material.dispose()
        }
      }
    })
  }

  private onResize(): void {
    const w = this.container.clientWidth
    const h = this.container.clientHeight
    if (w === 0 || h === 0) return

    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h)
  }
}
