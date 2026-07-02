// Scene template presets

import { SceneTemplate, SceneObject } from '../types/scene'

export interface ScenePreset {
  template: SceneTemplate
  label: string
  labelEn: string
  icon: string
  objects: Omit<SceneObject, 'id'>[]
}

let objIdCounter = 0
function obj(type: SceneObject['type'], x: number, y: number, z: number, sx = 1, sy = 1, sz = 1, color = 0x888888): Omit<SceneObject, 'id'> {
  return {
    type,
    position: { x, y, z },
    rotation: { yaw: 0, pitch: 0, roll: 0 },
    scale: { x: sx, y: sy, z: sz },
    color,
  }
}

export const SCENE_PRESETS: ScenePreset[] = [
  {
    template: 'studio',
    label: '摄影棚',
    labelEn: 'Studio',
    icon: '🎬',
    objects: [
      obj('plane', 0, 0, 0, 20, 1, 20, 0x2a2a2a),
      obj('box', -6, 1.5, -8, 3, 3, 0.3, 0x333333),     // backdrop
      obj('cylinder', -3, 0.5, 0, 0.3, 1, 0.3, 0x444444), // light stand
      obj('cylinder', 3, 0.5, 0, 0.3, 1, 0.3, 0x444444),  // light stand
    ],
  },
  {
    template: 'living_room',
    label: '客厅',
    labelEn: 'Living Room',
    icon: '🛋️',
    objects: [
      obj('plane', 0, 0, 0, 12, 1, 10, 0x8B7355),         // floor
      obj('box', 0, 0.4, -4, 4, 0.8, 1, 0x654321),        // sofa
      obj('box', 0, 0.25, 0, 2, 0.5, 1.2, 0x4a3728),      // coffee table
      obj('box', -5, 1, -4.5, 0.3, 2, 3, 0x555555),       // bookshelf
      obj('box', 5, 0.5, -4.5, 2, 1, 0.5, 0x333333),      // TV stand
    ],
  },
  {
    template: 'street',
    label: '街道',
    labelEn: 'Street',
    icon: '🏙️',
    objects: [
      obj('plane', 0, 0, 0, 8, 1, 30, 0x3a3a3a),          // road
      obj('building', -6, 4, -5, 4, 8, 6, 0x666666),
      obj('building', 6, 3, -5, 4, 6, 6, 0x777777),
      obj('building', -6, 5, 10, 4, 10, 6, 0x555555),
      obj('tree', 4, 2, 5, 1, 4, 1, 0x2d5a27),
      obj('tree', -4, 2, 12, 1, 4, 1, 0x2d5a27),
    ],
  },
  {
    template: 'cafe',
    label: '咖啡馆',
    labelEn: 'Cafe',
    icon: '☕',
    objects: [
      obj('plane', 0, 0, 0, 10, 1, 8, 0x8B7355),
      obj('cylinder', -2, 0.35, -1, 0.4, 0.7, 0.4, 0x8B4513),  // table
      obj('cylinder', 2, 0.35, -1, 0.4, 0.7, 0.4, 0x8B4513),   // table
      obj('cylinder', 0, 0.35, 2, 0.5, 0.7, 0.5, 0x8B4513),    // round table
      obj('box', -4, 1, -3.5, 2, 2, 0.5, 0x654321),            // bar counter
      obj('box', 4, 1.2, -3.5, 0.3, 2.4, 2, 0x444444),         // shelf
    ],
  },
  {
    template: 'empty',
    label: '空白',
    labelEn: 'Empty',
    icon: '⬜',
    objects: [],
  },
]
