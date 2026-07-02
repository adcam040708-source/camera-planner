// Lighting presets

export interface LightPreset {
  name: string
  label: string
  color: number
  intensity: number
  position: { x: number; y: number; z: number }
}

export const LIGHT_PRESETS: LightPreset[] = [
  {
    name: 'daylight',
    label: '日光',
    color: 0xfff5e0,
    intensity: 1.2,
    position: { x: 10, y: 20, z: 10 },
  },
  {
    name: 'indoor',
    label: '室内',
    color: 0xffeedd,
    intensity: 0.8,
    position: { x: 0, y: 8, z: 0 },
  },
  {
    name: 'night',
    label: '夜景',
    color: 0x4466aa,
    intensity: 0.4,
    position: { x: -5, y: 15, z: -5 },
  },
  {
    name: 'soft',
    label: '柔和',
    color: 0xffffff,
    intensity: 0.6,
    position: { x: 3, y: 12, z: 8 },
  },
  {
    name: 'dramatic',
    label: '戏剧',
    color: 0xff8844,
    intensity: 1.5,
    position: { x: -8, y: 6, z: -3 },
  },
]
