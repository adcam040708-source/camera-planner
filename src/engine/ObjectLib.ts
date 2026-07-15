/**
 * ObjectLib — 12 preset scene object types.
 *
 * Each object type has a factory function that creates a Three.js mesh.
 * Objects are placed in the scene and can be moved/rotated/scaled.
 */

import * as THREE from 'three'
import { SceneObject, ObjectType } from '../types/scene'
import { deg2rad, generateId } from './calc'

export class ObjectLib {
  private scene: THREE.Scene
  private objects: Map<string, { data: SceneObject; mesh: THREE.Object3D }> = new Map()

  constructor(scene: THREE.Scene) {
    this.scene = scene
  }

  /** Add an object to the scene */
  addObject(params: Partial<SceneObject> & { type: ObjectType }): SceneObject {
    const id = params.id || generateId()

    const data: SceneObject = {
      id,
      type: params.type,
      position: params.position || { x: 0, y: 0, z: 0 },
      rotation: params.rotation || { yaw: 0, pitch: 0, roll: 0 },
      scale: params.scale || { x: 1, y: 1, z: 1 },
      color: params.color || 0x888888,
    }

    const mesh = this.createMesh(data)
    this.tagObjectId(mesh, id, data.type)
    this.scene.add(mesh)
    this.objects.set(id, { data, mesh })

    return data
  }

  /** Update an existing object */
  updateObject(id: string, params: Partial<SceneObject>): SceneObject | null {
    const entry = this.objects.get(id)
    if (!entry) return null

    Object.assign(entry.data, params)

    // Rebuild mesh
    this.scene.remove(entry.mesh)
    const newMesh = this.createMesh(entry.data)
    this.tagObjectId(newMesh, id, entry.data.type)
    this.scene.add(newMesh)
    entry.mesh = newMesh

    return entry.data
  }

  /** Tag root + child meshes so RayPicker can resolve objectId on hit */
  private tagObjectId(root: THREE.Object3D, id: string, type: ObjectType): void {
    root.userData = { ...root.userData, objectId: id, objectType: type }
    root.traverse(child => {
      if (child !== root) {
        child.userData = { ...child.userData, objectId: id, objectType: type }
      }
    })
  }

  /** Delete an object */
  deleteObject(id: string): boolean {
    const entry = this.objects.get(id)
    if (!entry) return false

    this.scene.remove(entry.mesh)
    entry.mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose()
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.dispose())
        } else {
          child.material.dispose()
        }
      }
    })
    this.objects.delete(id)
    return true
  }

  /** Get all objects */
  getAllObjects(): SceneObject[] {
    return Array.from(this.objects.values()).map(e => e.data)
  }

  /** Get object by ID */
  getObject(id: string): SceneObject | null {
    return this.objects.get(id)?.data || null
  }

  /** Get mesh for raycasting */
  getMesh(id: string): THREE.Object3D | null {
    return this.objects.get(id)?.mesh || null
  }

  /** Get all meshes for raycasting */
  getAllMeshes(): THREE.Object3D[] {
    return Array.from(this.objects.values()).map(e => e.mesh)
  }

  /** Clear all objects */
  clearAll(): void {
    for (const [id] of this.objects) {
      this.deleteObject(id)
    }
  }

  // --- Private: mesh factory ---

  private createMesh(data: SceneObject): THREE.Object3D {
    const mat = new THREE.MeshStandardMaterial({
      color: data.color,
      roughness: 0.7,
      metalness: 0.1,
    })

    let geo: THREE.BufferGeometry

    switch (data.type) {
      case 'box':
        geo = new THREE.BoxGeometry(1, 1, 1)
        break
      case 'sphere':
        geo = new THREE.SphereGeometry(0.5, 24, 24)
        break
      case 'cone':
        geo = new THREE.ConeGeometry(0.5, 1, 16)
        break
      case 'cylinder':
        geo = new THREE.CylinderGeometry(0.5, 0.5, 1, 16)
        break
      case 'torus':
        geo = new THREE.TorusGeometry(0.5, 0.15, 12, 32)
        break
      case 'plane':
        geo = new THREE.PlaneGeometry(1, 1)
        break
      case 'person':
        return this.createPerson(data, mat)
      case 'building':
        return this.createBuilding(data, mat)
      case 'car':
        return this.createCar(data, mat)
      case 'tree':
        return this.createTree(data, mat)
      case 'chair':
        return this.createChair(data, mat)
      case 'prop':
        geo = new THREE.BoxGeometry(0.3, 0.3, 0.3) // generic small prop
        break
      default:
        geo = new THREE.BoxGeometry(1, 1, 1)
    }

    const mesh = new THREE.Mesh(geo, mat)
    mesh.castShadow = true
    mesh.receiveShadow = true
    this.applyTransform(mesh, data)
    return mesh
  }

  private createPerson(data: SceneObject, baseMat: THREE.MeshStandardMaterial): THREE.Group {
    const group = new THREE.Group()

    // Body (cylinder)
    const bodyGeo = new THREE.CylinderGeometry(0.25, 0.2, 1.2, 8)
    const bodyMesh = new THREE.Mesh(bodyGeo, baseMat)
    bodyMesh.position.y = 0.6
    bodyMesh.castShadow = true
    group.add(bodyMesh)

    // Head (sphere)
    const headMat = new THREE.MeshStandardMaterial({ color: 0xe0c8a0, roughness: 0.8 })
    const headGeo = new THREE.SphereGeometry(0.15, 16, 16)
    const headMesh = new THREE.Mesh(headGeo, headMat)
    headMesh.position.y = 1.35
    headMesh.castShadow = true
    group.add(headMesh)

    this.applyTransform(group, data)
    return group
  }

  private createBuilding(data: SceneObject, baseMat: THREE.MeshStandardMaterial): THREE.Group {
    const group = new THREE.Group()

    // Main structure
    const mainGeo = new THREE.BoxGeometry(1, 1, 1)
    const mainMesh = new THREE.Mesh(mainGeo, baseMat)
    mainMesh.position.y = 0.5
    mainMesh.castShadow = true
    mainMesh.receiveShadow = true
    group.add(mainMesh)

    // Windows (darker boxes on front)
    const windowMat = new THREE.MeshStandardMaterial({ color: 0x334455, metalness: 0.5 })
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 2; col++) {
        const winGeo = new THREE.BoxGeometry(0.2, 0.15, 0.02)
        const win = new THREE.Mesh(winGeo, windowMat)
        win.position.set(-0.15 + col * 0.3, 0.2 + row * 0.25, 0.51)
        group.add(win)
      }
    }

    this.applyTransform(group, data)
    return group
  }

  private createCar(data: SceneObject, baseMat: THREE.MeshStandardMaterial): THREE.Group {
    const group = new THREE.Group()

    // Body
    const bodyGeo = new THREE.BoxGeometry(2, 0.6, 1)
    const bodyMesh = new THREE.Mesh(bodyGeo, baseMat)
    bodyMesh.position.y = 0.4
    bodyMesh.castShadow = true
    group.add(bodyMesh)

    // Cabin
    const cabinGeo = new THREE.BoxGeometry(1.2, 0.5, 0.9)
    const cabinMat = new THREE.MeshStandardMaterial({ color: 0x88aacc, metalness: 0.3, roughness: 0.2 })
    const cabinMesh = new THREE.Mesh(cabinGeo, cabinMat)
    cabinMesh.position.set(-0.1, 0.9, 0)
    group.add(cabinMesh)

    // Wheels
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x222222 })
    const wheelGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.1, 16)
    const wheelPositions = [
      [-0.6, 0.2, 0.55], [0.6, 0.2, 0.55],
      [-0.6, 0.2, -0.55], [0.6, 0.2, -0.55],
    ]
    for (const [x, y, z] of wheelPositions) {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat)
      wheel.position.set(x, y, z)
      wheel.rotation.x = Math.PI / 2
      group.add(wheel)
    }

    this.applyTransform(group, data)
    return group
  }

  private createTree(data: SceneObject, baseMat: THREE.MeshStandardMaterial): THREE.Group {
    const group = new THREE.Group()

    // Trunk
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6b4226, roughness: 0.9 })
    const trunkGeo = new THREE.CylinderGeometry(0.1, 0.15, 1.5, 8)
    const trunk = new THREE.Mesh(trunkGeo, trunkMat)
    trunk.position.y = 0.75
    trunk.castShadow = true
    group.add(trunk)

    // Canopy (sphere-ish)
    const canopyGeo = new THREE.SphereGeometry(0.8, 12, 12)
    const canopy = new THREE.Mesh(canopyGeo, baseMat)
    canopy.position.y = 2
    canopy.castShadow = true
    group.add(canopy)

    this.applyTransform(group, data)
    return group
  }

  private createChair(data: SceneObject, baseMat: THREE.MeshStandardMaterial): THREE.Group {
    const group = new THREE.Group()
    const legMat = new THREE.MeshStandardMaterial({ color: 0x3a2a1a, roughness: 0.9 })

    // Seat
    const seatGeo = new THREE.BoxGeometry(0.5, 0.05, 0.5)
    const seat = new THREE.Mesh(seatGeo, baseMat)
    seat.position.y = 0.45
    seat.castShadow = true
    group.add(seat)

    // Back
    const backGeo = new THREE.BoxGeometry(0.5, 0.5, 0.05)
    const back = new THREE.Mesh(backGeo, baseMat)
    back.position.set(0, 0.7, -0.225)
    back.castShadow = true
    group.add(back)

    // 4 legs
    const legGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.45, 6)
    const legPositions = [
      [-0.2, 0.225, -0.2], [0.2, 0.225, -0.2],
      [-0.2, 0.225, 0.2], [0.2, 0.225, 0.2],
    ]
    for (const [x, y, z] of legPositions) {
      const leg = new THREE.Mesh(legGeo, legMat)
      leg.position.set(x, y, z)
      leg.castShadow = true
      group.add(leg)
    }

    this.applyTransform(group, data)
    return group
  }

  private applyTransform(obj: THREE.Object3D, data: SceneObject): void {
    obj.position.set(data.position.x, data.position.y, data.position.z)
    obj.rotation.set(
      deg2rad(data.rotation.pitch),
      deg2rad(data.rotation.yaw),
      deg2rad(data.rotation.roll)
    )
    obj.scale.set(data.scale.x, data.scale.y, data.scale.z)
  }
}
