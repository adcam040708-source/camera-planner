/**
 * PathSystem — Camera movement path with keyframe interpolation.
 *
 * Defines a series of keyframes that a camera follows during playback.
 * Supports position and rotation interpolation with easing.
 */

import * as THREE from 'three'
import { PathPoint } from '../types/project'
import { lerp, deg2rad, generateId, easeInOutCubic } from './calc'

export class PathSystem {
  private scene: THREE.Scene
  private keyframes: PathPoint[] = []
  private line: THREE.Line | null = null
  private markers: THREE.Mesh[] = []

  constructor(scene: THREE.Scene) {
    this.scene = scene
  }

  /** Add a keyframe */
  addKeyframe(params: Partial<PathPoint> & { position: { x: number; y: number; z: number } }): PathPoint {
    const point: PathPoint = {
      id: params.id || generateId(),
      position: params.position,
      rotation: params.rotation || { yaw: 0, pitch: 0, roll: 0 },
      cameraId: params.cameraId,
      t: params.t ?? this.keyframes.length / Math.max(1, this.keyframes.length),
    }

    this.keyframes.push(point)
    this.refreshVisualization()
    return point
  }

  /** Remove a keyframe */
  removeKeyframe(id: string): boolean {
    const idx = this.keyframes.findIndex(p => p.id === id)
    if (idx < 0) return false
    this.keyframes.splice(idx, 1)
    this.recalcT()
    this.refreshVisualization()
    return true
  }

  /** Get all keyframes */
  getKeyframes(): PathPoint[] {
    return [...this.keyframes]
  }

  /** Clear all keyframes */
  clearAll(): void {
    this.keyframes = []
    this.refreshVisualization()
  }

  /** Get interpolated position and rotation at time t (0-1) */
  sample(t: number): {
    position: { x: number; y: number; z: number }
    rotation: { yaw: number; pitch: number; roll: number }
  } | null {
    if (this.keyframes.length < 2) return null

    const eased = easeInOutCubic(t)

    // Find the two keyframes surrounding this t
    let i = 0
    for (; i < this.keyframes.length - 1; i++) {
      if (this.keyframes[i + 1].t >= eased) break
    }
    i = Math.min(i, this.keyframes.length - 2)

    const a = this.keyframes[i]
    const b = this.keyframes[i + 1]
    const localT = (b.t - a.t) > 0 ? (eased - a.t) / (b.t - a.t) : 0

    return {
      position: {
        x: lerp(a.position.x, b.position.x, localT),
        y: lerp(a.position.y, b.position.y, localT),
        z: lerp(a.position.z, b.position.z, localT),
      },
      rotation: {
        yaw: lerp(a.rotation.yaw, b.rotation.yaw, localT),
        pitch: lerp(a.rotation.pitch, b.rotation.pitch, localT),
        roll: lerp(a.rotation.roll, b.rotation.roll, localT),
      },
    }
  }

  /** Import keyframes from array */
  importKeyframes(points: PathPoint[]): void {
    this.keyframes = points.map(p => ({ ...p }))
    this.recalcT()
    this.refreshVisualization()
  }

  // --- Private ---

  private recalcT(): void {
    const len = this.keyframes.length
    this.keyframes.forEach((p, i) => {
      p.t = len > 1 ? i / (len - 1) : 0
    })
  }

  private refreshVisualization(): void {
    // Remove old
    if (this.line) {
      this.scene.remove(this.line)
      this.line.geometry?.dispose()
      const lineMat = this.line.material
      if (Array.isArray(lineMat)) { lineMat.forEach(m => m.dispose()) } else { lineMat?.dispose() }
      this.line = null
    }
    for (const m of this.markers) {
      this.scene.remove(m)
      m.geometry?.dispose()
      const mat = m.material
      if (Array.isArray(mat)) { mat.forEach(mm => mm.dispose()) } else { mat?.dispose() }
    }
    this.markers = []

    if (this.keyframes.length < 1) return

    // Draw markers
    const markerGeo = new THREE.SphereGeometry(0.12, 8, 8)
    const markerMat = new THREE.MeshBasicMaterial({ color: 0xff6b35 })

    for (const kf of this.keyframes) {
      const marker = new THREE.Mesh(markerGeo, markerMat)
      marker.position.set(kf.position.x, kf.position.y, kf.position.z)
      this.scene.add(marker)
      this.markers.push(marker)
    }

    // Draw connecting line
    if (this.keyframes.length >= 2) {
      const points = this.keyframes.map(
        kf => new THREE.Vector3(kf.position.x, kf.position.y, kf.position.z)
      )
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points)
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xff6b35,
        linewidth: 2,
      })
      this.line = new THREE.Line(lineGeo, lineMat)
      this.scene.add(this.line)
    }
  }

  /** Clean up */
  dispose(): void {
    this.clearAll()
  }
}
