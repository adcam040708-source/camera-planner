/**
 * calc.ts — Pure math functions for camera optics calculations.
 * No Three.js dependency. Pure functions, easy to unit test.
 */

import { DOFResult, Position3D, Rotation3D } from '../types/camera'
import { ActorKeyframe } from '../types/actor'
import { PathPoint } from '../types/project'
import { SENSOR_PRESETS } from '../presets/sensors'

/**
 * Calculate Field of View (vertical) in degrees.
 * Formula: 2 * atan(sensorHeight / (2 * focalLength)) * 180 / PI
 */
export function calcFOV(sensorHeight: number, focalLength: number): number {
  if (focalLength <= 0 || sensorHeight <= 0) return 0
  return 2 * Math.atan(sensorHeight / (2 * focalLength)) * (180 / Math.PI)
}

/**
 * Calculate Depth of Field using hyperfocal distance formula.
 *
 * @param focalLength - in mm
 * @param fstop - f-number (e.g. 2.8)
 * @param focusDist - focus distance in meters
 * @param sensorHeight - sensor height in mm
 * @param coc - circle of confusion multiplier (default 0.03mm for full-frame equivalent)
 */
export function calcDOF(
  focalLength: number,
  fstop: number,
  focusDist: number,
  sensorHeight: number,
  coc: number = 0.03
): DOFResult {
  if (focalLength <= 0 || fstop <= 0 || focusDist <= 0 || sensorHeight <= 0) {
    return { near: 0, far: Infinity, range: Infinity }
  }

  // Scale CoC based on sensor size relative to full-frame (24mm height)
  const cropFactor = 24 / sensorHeight
  const scaledCoC = coc / cropFactor

  // Hyperfocal distance in meters: H = f² / (N * c) / 1000
  // f in mm, N is fstop, c in mm → H in meters
  const H = (focalLength * focalLength) / (fstop * scaledCoC * 1000)

  // Near limit: s * (H - f) / (H + s - 2f)
  // Simplified (f << s): s * H / (H + s)
  const focalM = focalLength / 1000
  const near = (focusDist * (H - focalM)) / (H + focusDist - 2 * focalM)

  // Far limit: s * (H - f) / (H - s)
  const far = (focusDist * (H - focalM)) / (H - focusDist)

  return {
    near: Math.max(0, near),
    far: far < 0 ? Infinity : far,  // negative means beyond hyperfocal
    range: far < 0 ? Infinity : far - near,
  }
}

/**
 * Calculate FOV for a named sensor preset.
 */
export function calcFOVByPreset(presetName: string, focalLength: number): number {
  const preset = SENSOR_PRESETS.find(p => p.name === presetName)
  if (!preset) return 0
  return calcFOV(preset.h, focalLength)
}

/**
 * Convert degrees to radians.
 */
export function deg2rad(degrees: number): number {
  return degrees * (Math.PI / 180)
}

/**
 * Convert radians to degrees.
 */
export function rad2deg(radians: number): number {
  return radians * (180 / Math.PI)
}

/**
 * Generate a short unique ID.
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36)
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

/**
 * Linear interpolation between two values.
 */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * clamp(t, 0, 1)
}

/**
 * Ease in-out cubic for smooth animation.
 */
export function easeInOutCubic(t: number): number {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2
}

/**
 * Sample an actor's position/rotation at a given time based on keyframes.
 * Uses easeInOutCubic interpolation between keyframes.
 * Pure function — no Three.js dependency.
 */
export function sampleActorAtTime(
  keyframes: ActorKeyframe[],
  time: number
): { position: Position3D; rotation: Rotation3D; action: string } | null {
  if (keyframes.length === 0) return null
  if (keyframes.length === 1) {
    return {
      position: { ...keyframes[0].position },
      rotation: { ...keyframes[0].rotation },
      action: keyframes[0].action,
    }
  }

  // Find the two keyframes surrounding `time`
  let i = 0
  for (; i < keyframes.length - 1; i++) {
    if (keyframes[i + 1].time >= time) break
  }
  i = Math.min(i, keyframes.length - 2)

  const a = keyframes[i]
  const b = keyframes[i + 1]
  const span = b.time - a.time
  const localT = span > 0 ? (time - a.time) / span : 0
  const eased = easeInOutCubic(localT)

  return {
    position: {
      x: lerp(a.position.x, b.position.x, eased),
      y: lerp(a.position.y, b.position.y, eased),
      z: lerp(a.position.z, b.position.z, eased),
    },
    rotation: {
      yaw: lerp(a.rotation.yaw, b.rotation.yaw, eased),
      pitch: lerp(a.rotation.pitch, b.rotation.pitch, eased),
      roll: lerp(a.rotation.roll, b.rotation.roll, eased),
    },
    action: localT < 0.5 ? a.action : b.action,
  }
}

/**
 * Sample a camera's position/rotation along its path at normalized time (0-1).
 * Filters path points by cameraId and interpolates between keyframes.
 */
export function sampleCameraPathAtTime(
  pathPoints: PathPoint[],
  cameraId: string,
  normalizedTime: number
): { position: Position3D; rotation: Rotation3D } | null {
  const kfs = pathPoints
    .filter(p => p.cameraId === cameraId)
    .sort((a, b) => a.t - b.t)

  if (kfs.length === 0) return null
  if (kfs.length === 1) {
    return {
      position: { ...kfs[0].position },
      rotation: { ...kfs[0].rotation },
    }
  }

  const t = clamp(normalizedTime, 0, 1)

  if (t <= kfs[0].t) {
    return {
      position: { ...kfs[0].position },
      rotation: { ...kfs[0].rotation },
    }
  }

  const last = kfs[kfs.length - 1]
  if (t >= last.t) {
    return {
      position: { ...last.position },
      rotation: { ...last.rotation },
    }
  }

  let i = 0
  for (; i < kfs.length - 1; i++) {
    if (kfs[i + 1].t >= t) break
  }
  i = Math.min(i, kfs.length - 2)

  const a = kfs[i]
  const b = kfs[i + 1]
  const span = b.t - a.t
  const localT = span > 0 ? (t - a.t) / span : 0
  const eased = easeInOutCubic(localT)

  return {
    position: {
      x: lerp(a.position.x, b.position.x, eased),
      y: lerp(a.position.y, b.position.y, eased),
      z: lerp(a.position.z, b.position.z, eased),
    },
    rotation: {
      yaw: lerp(a.rotation.yaw, b.rotation.yaw, eased),
      pitch: lerp(a.rotation.pitch, b.rotation.pitch, eased),
      roll: lerp(a.rotation.roll, b.rotation.roll, eased),
    },
  }
}
