/**
 * Unit tests for engine/calc.ts
 * Run with: npx vitest run (or node --test with ts-node)
 *
 * Since we don't have vitest installed, this file can also be run directly:
 *   npx tsx src/engine/__tests__/calc.test.ts
 */

import { calcFOV, calcDOF, deg2rad, rad2deg, clamp, lerp, easeInOutCubic, generateId, sampleCameraPathAtTime } from '../calc'

// Simple test runner
let passed = 0
let failed = 0

function test(name: string, fn: () => void) {
  try {
    fn()
    passed++
    console.log(`  ✓ ${name}`)
  } catch (e) {
    failed++
    console.error(`  ✗ ${name}`)
    console.error(`    ${(e as Error).message}`)
  }
}

function assertClose(actual: number, expected: number, tolerance: number, msg?: string) {
  if (Math.abs(actual - expected) > tolerance) {
    throw new Error(`${msg || ''} Expected ~${expected}, got ${actual} (tolerance: ${tolerance})`)
  }
}

function assertEqual(actual: unknown, expected: unknown, msg?: string) {
  if (actual !== expected) {
    throw new Error(`${msg || ''} Expected ${expected}, got ${actual}`)
  }
}

function assertTrue(condition: boolean, msg?: string) {
  if (!condition) {
    throw new Error(msg || 'Assertion failed')
  }
}

// ============================================================
// Tests
// ============================================================

console.log('\ncalcFOV:')

test('50mm on full-frame (24mm sensor height) ≈ 27.0°', () => {
  assertClose(calcFOV(24, 50), 27.0, 0.1)
})

test('24mm on full-frame ≈ 53.1°', () => {
  assertClose(calcFOV(24, 24), 53.1, 0.1)
})

test('85mm on full-frame ≈ 16.1°', () => {
  assertClose(calcFOV(24, 85), 16.1, 0.1)
})

test('200mm on full-frame ≈ 6.9°', () => {
  assertClose(calcFOV(24, 200), 6.9, 0.1)
})

test('8mm on full-frame (wide angle) ≈ 112.6°', () => {
  assertClose(calcFOV(24, 8), 112.6, 0.5)
})

test('ARRI Alexa 35 (22.2mm) at 50mm ≈ 25.0°', () => {
  assertClose(calcFOV(22.2, 50), 25.0, 0.2)
})

test('MFT (13mm) at 50mm ≈ 14.7°', () => {
  assertClose(calcFOV(13, 50), 14.7, 0.2)
})

test('Zero focal returns 0', () => {
  assertEqual(calcFOV(24, 0), 0)
})

test('Negative focal returns 0', () => {
  assertEqual(calcFOV(24, -50), 0)
})

test('Zero sensor height returns 0', () => {
  assertEqual(calcFOV(0, 50), 0)
})


console.log('\ncalcDOF:')

test('50mm f/2.8 at 5m on full-frame', () => {
  const dof = calcDOF(50, 2.8, 5, 24)
  assertTrue(dof.near > 0 && dof.near < 5, `near=${dof.near} should be < 5m`)
  assertTrue(dof.far > 5, `far=${dof.far} should be > 5m`)
  assertTrue(dof.range > 0 && dof.range < 10, `range=${dof.range} should be reasonable`)
})

test('Wider aperture = shallower DOF', () => {
  const dofWide = calcDOF(50, 1.4, 5, 24)
  const dofNarrow = calcDOF(50, 8, 5, 24)
  assertTrue(dofWide.range < dofNarrow.range,
    `f/1.4 range (${dofWide.range.toFixed(3)}) should be < f/8 range (${dofNarrow.range.toFixed(3)})`)
})

test('Longer focal = shallower DOF', () => {
  const dof50 = calcDOF(50, 2.8, 5, 24)
  const dof200 = calcDOF(200, 2.8, 5, 24)
  assertTrue(dof200.range < dof50.range,
    `200mm range (${dof200.range.toFixed(3)}) should be < 50mm range (${dof50.range.toFixed(3)})`)
})

test('Closer focus = shallower DOF', () => {
  const dof1m = calcDOF(50, 2.8, 1, 24)
  const dof10m = calcDOF(50, 2.8, 10, 24)
  assertTrue(dof1m.range < dof10m.range,
    `1m range (${dof1m.range.toFixed(3)}) should be < 10m range (${dof10m.range.toFixed(3)})`)
})

test('Smaller sensor = deeper DOF (crop factor effect)', () => {
  const dofFF = calcDOF(50, 2.8, 5, 24)    // full frame
  const dofMFT = calcDOF(50, 2.8, 5, 13)   // MFT
  assertTrue(dofMFT.range < dofFF.range,
    `MFT range (${dofMFT.range.toFixed(3)}) should be < FF range (${dofFF.range.toFixed(3)})`)
})

test('Invalid inputs return safe defaults', () => {
  const dof1 = calcDOF(0, 2.8, 5, 24)
  assertTrue(dof1.range === Infinity)

  const dof2 = calcDOF(50, 0, 5, 24)
  assertTrue(dof2.range === Infinity)

  const dof3 = calcDOF(50, 2.8, 0, 24)
  assertTrue(dof3.range === Infinity)
})


console.log('\nUtility functions:')

test('deg2rad(180) ≈ π', () => {
  assertClose(deg2rad(180), Math.PI, 0.0001)
})

test('rad2deg(π) ≈ 180', () => {
  assertClose(rad2deg(Math.PI), 180, 0.0001)
})

test('clamp works correctly', () => {
  assertEqual(clamp(5, 0, 10), 5)
  assertEqual(clamp(-1, 0, 10), 0)
  assertEqual(clamp(15, 0, 10), 10)
})

test('lerp interpolates correctly', () => {
  assertEqual(lerp(0, 10, 0), 0)
  assertEqual(lerp(0, 10, 1), 10)
  assertEqual(lerp(0, 10, 0.5), 5)
  assertEqual(lerp(10, 20, 0.25), 12.5)
})

test('lerp clamps t to [0, 1]', () => {
  assertEqual(lerp(0, 10, -0.5), 0)
  assertEqual(lerp(0, 10, 1.5), 10)
})

test('easeInOutCubic boundary values', () => {
  assertEqual(easeInOutCubic(0), 0)
  assertEqual(easeInOutCubic(1), 1)
  assertClose(easeInOutCubic(0.5), 0.5, 0.001)
})

test('easeInOutCubic is symmetric', () => {
  assertClose(
    easeInOutCubic(0.25) + easeInOutCubic(0.75),
    1.0,
    0.001
  )
})

test('generateId returns unique strings', () => {
  const ids = new Set<string>()
  for (let i = 0; i < 100; i++) {
    ids.add(generateId())
  }
  assertEqual(ids.size, 100, 'All 100 IDs should be unique')
})

test('generateId returns non-empty strings', () => {
  const id = generateId()
  assertTrue(id.length > 0, 'ID should not be empty')
  assertTrue(typeof id === 'string', 'ID should be a string')
})


// ============================================================
// Camera path sampling
// ============================================================

console.log('\ncamera path sampling:')

test('sampleCameraPathAtTime returns null when no path for camera', () => {
  const result = sampleCameraPathAtTime([], 'cam-1', 0.5)
  assertEqual(result, null)
})

test('sampleCameraPathAtTime returns single keyframe position', () => {
  const result = sampleCameraPathAtTime([
    {
      id: 'p1',
      cameraId: 'cam-1',
      position: { x: 1, y: 1.6, z: 2 },
      rotation: { yaw: 45, pitch: 0, roll: 0 },
      t: 0.5,
    },
  ], 'cam-1', 0.2)
  assertEqual(result?.position.x, 1)
  assertEqual(result?.position.z, 2)
})

test('sampleCameraPathAtTime interpolates between two keyframes at midpoint', () => {
  const result = sampleCameraPathAtTime([
    {
      id: 'p1',
      cameraId: 'cam-1',
      position: { x: 0, y: 1.6, z: 0 },
      rotation: { yaw: 0, pitch: 0, roll: 0 },
      t: 0,
    },
    {
      id: 'p2',
      cameraId: 'cam-1',
      position: { x: 10, y: 1.6, z: 0 },
      rotation: { yaw: 90, pitch: 0, roll: 0 },
      t: 1,
    },
  ], 'cam-1', 0.5)
  assertClose(result?.position.x ?? 0, 5, 0.01, 'x at midpoint')
  assertClose(result?.rotation.yaw ?? 0, 45, 0.01, 'yaw at midpoint')
})

test('sampleCameraPathAtTime clamps before first keyframe', () => {
  const result = sampleCameraPathAtTime([
    {
      id: 'p1',
      cameraId: 'cam-1',
      position: { x: 3, y: 1.6, z: 4 },
      rotation: { yaw: 10, pitch: 0, roll: 0 },
      t: 0.4,
    },
    {
      id: 'p2',
      cameraId: 'cam-1',
      position: { x: 8, y: 1.6, z: 4 },
      rotation: { yaw: 20, pitch: 0, roll: 0 },
      t: 0.8,
    },
  ], 'cam-1', 0.1)
  assertEqual(result?.position.x, 3)
})


// ============================================================
// Summary
// ============================================================

console.log(`\n${'='.repeat(50)}`)
console.log(`Results: ${passed} passed, ${failed} failed, ${passed + failed} total`)
console.log(`${'='.repeat(50)}\n`)

if (failed > 0) {
  process.exit(1)
}
