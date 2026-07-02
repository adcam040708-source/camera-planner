// Sensor presets - real camera sensor dimensions in mm

import { SensorPreset } from '../types/camera'

export const SENSOR_PRESETS: SensorPreset[] = [
  { name: 'full_frame', label: '全画幅 (Full Frame)', w: 36, h: 24 },
  { name: 'arri_alexa35', label: 'ARRI Alexa 35', w: 29.9, h: 22.2 },
  { name: 'red_raptor', label: 'RED V-Raptor', w: 40.96, h: 21.6 },
  { name: 'sony_fx6', label: 'Sony FX6', w: 35.7, h: 23.8 },
  { name: 'canon_c70', label: 'Canon C70 (Super35)', w: 26.2, h: 13.8 },
  { name: 'bmpcc_6k', label: 'BMPCC 6K (Super35)', w: 23.1, h: 12.95 },
  { name: 'mft', label: 'MFT (Micro Four Thirds)', w: 17.3, h: 13 },
]

export function getSensorPreset(name: string): SensorPreset | undefined {
  return SENSOR_PRESETS.find(p => p.name === name)
}

export function getSensorByDimensions(w: number, h: number): SensorPreset | undefined {
  return SENSOR_PRESETS.find(p =>
    Math.abs(p.w - w) < 0.1 && Math.abs(p.h - h) < 0.1
  )
}
