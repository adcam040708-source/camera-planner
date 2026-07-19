/**
 * PathSystem — Camera movement path with keyframe visualization & picking.
 *
 * Each keyframe is shown as a miniature ghost camera (body + lens + look arrow)
 * so orientation is readable and markers can be ray-picked for editing.
 */

import * as THREE from 'three'
import { PathPoint } from '../types/project'
import { lerp, deg2rad, generateId, easeInOutCubic } from './calc'

const MARKER_COLOR = 0xff6b35
const MARKER_SELECTED = 0xffd93d

export class PathSystem {
  private scene: THREE.Scene
  private keyframes: PathPoint[] = []
  private line: THREE.Line | null = null
  private markers: THREE.Group[] = []
  private selectedId: string | null = null

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
    if (this.selectedId === id) this.selectedId = null
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
    this.selectedId = null
    this.refreshVisualization()
  }

  /** Highlight a path keyframe marker */
  setSelectedId(id: string | null): void {
    this.selectedId = id
    for (const g of this.markers) {
      const selected = g.userData.pathPointId === id
      g.traverse(child => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
          child.material.color.setHex(selected ? MARKER_SELECTED : MARKER_COLOR)
          child.material.opacity = selected ? 0.95 : 0.55
        }
      })
    }
  }

  /** Marker groups for RayPicker */
  getMarkerGroups(): THREE.Group[] {
    return [...this.markers]
  }

  /** Get interpolated position and rotation at time t (0-1) */
  sample(t: number): {
    position: { x: number; y: number; z: number }
    rotation: { yaw: number; pitch: number; roll: number }
  } | null {
    if (this.keyframes.length < 2) return null

    const eased = easeInOutCubic(t)

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
  importKeyframes(points: PathPoint[], cameraId?: string | null): void {
    const filtered = cameraId
      ? points.filter(p => p.cameraId === cameraId)
      : points
    this.keyframes = filtered.map(p => ({ ...p })).sort((a, b) => a.t - b.t)
    this.refreshVisualization()
    if (this.selectedId && !this.keyframes.some(k => k.id === this.selectedId)) {
      this.selectedId = null
    } else {
      this.setSelectedId(this.selectedId)
    }
  }

  /** Visual objects to hide in viewfinder */
  getVisualObjects(): THREE.Object3D[] {
    const out: THREE.Object3D[] = [...this.markers]
    if (this.line) out.push(this.line)
    return out
  }

  /** Clean up */
  dispose(): void {
    this.clearAll()
  }

  // --- Private ---

  private refreshVisualization(): void {
    if (this.line) {
      this.scene.remove(this.line)
      this.line.geometry?.dispose()
      const lineMat = this.line.material
      if (Array.isArray(lineMat)) lineMat.forEach(m => m.dispose())
      else lineMat?.dispose()
      this.line = null
    }
    for (const m of this.markers) {
      this.scene.remove(m)
      m.traverse(child => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose()
          const mat = child.material
          if (Array.isArray(mat)) mat.forEach(mm => mm.dispose())
          else mat.dispose()
        }
      })
    }
    this.markers = []

    if (this.keyframes.length < 1) return

    for (let i = 0; i < this.keyframes.length; i++) {
      const kf = this.keyframes[i]
      const marker = this.createGhostCamera(kf, i)
      this.scene.add(marker)
      this.markers.push(marker)
    }

    if (this.keyframes.length >= 2) {
      const points = this.keyframes.map(
        kf => new THREE.Vector3(kf.position.x, kf.position.y, kf.position.z)
      )
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points)
      const lineMat = new THREE.LineBasicMaterial({
        color: MARKER_COLOR,
        transparent: true,
        opacity: 0.7,
      })
      this.line = new THREE.Line(lineGeo, lineMat)
      this.scene.add(this.line)
    }

    this.setSelectedId(this.selectedId)
  }

  /** Mini ghost camera: body + lens (-Z) + look arrow */
  private createGhostCamera(kf: PathPoint, index: number): THREE.Group {
    const group = new THREE.Group()
    group.userData = { pathPointId: kf.id, pathIndex: index }
    group.rotation.order = 'YXZ'

    const mat = new THREE.MeshBasicMaterial({
      color: MARKER_COLOR,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    })

    const body = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.14, 0.28), mat)
    body.userData = { pathPointId: kf.id }
    group.add(body)

    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.12, 10), mat.clone())
    lens.rotation.x = Math.PI / 2
    lens.position.z = -0.2
    lens.userData = { pathPointId: kf.id }
    group.add(lens)

    // Look arrow along local -Z
    const arrowMat = mat.clone()
    arrowMat.opacity = 0.75
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.35, 6), arrowMat)
    shaft.rotation.x = Math.PI / 2
    shaft.position.z = -0.45
    shaft.userData = { pathPointId: kf.id }
    group.add(shaft)

    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.12, 8), arrowMat.clone())
    tip.rotation.x = -Math.PI / 2
    tip.position.z = -0.68
    tip.userData = { pathPointId: kf.id }
    group.add(tip)

    // Index badge (small sphere above)
    const badge = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 8, 8),
      new THREE.MeshBasicMaterial({ color: MARKER_COLOR, transparent: true, opacity: 0.9 })
    )
    badge.position.y = 0.22
    badge.userData = { pathPointId: kf.id }
    group.add(badge)

    group.position.set(kf.position.x, kf.position.y, kf.position.z)
    group.rotation.set(
      deg2rad(kf.rotation.pitch),
      deg2rad(kf.rotation.yaw),
      deg2rad(kf.rotation.roll)
    )

    return group
  }
}
