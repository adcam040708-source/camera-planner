/**
 * ObjectPalette — Grid of object types to add to the scene.
 */

import React from 'react'
import { usePlannerStore } from '../store/usePlannerStore'
import { outputManager } from './CameraPlanner'
import { ObjectType } from '../types/scene'
import { generateId } from '../engine/calc'
import css from '../styles.module.css'

const OBJECT_TYPES: { type: ObjectType; label: string; icon: string }[] = [
  { type: 'box', label: '方块', icon: '⬜' },
  { type: 'sphere', label: '球体', icon: '⚪' },
  { type: 'cone', label: '锥体', icon: '△' },
  { type: 'cylinder', label: '柱体', icon: '▮' },
  { type: 'torus', label: '圆环', icon: '○' },
  { type: 'plane', label: '平面', icon: '▬' },
  { type: 'person', label: '人物', icon: '🧍' },
  { type: 'building', label: '建筑', icon: '🏢' },
  { type: 'car', label: '车辆', icon: '🚗' },
  { type: 'tree', label: '树木', icon: '🌳' },
  { type: 'chair', label: '椅子', icon: '🪑' },
  { type: 'prop', label: '道具', icon: '🎭' },
]

export const ObjectPalette: React.FC = () => {
  const addObject = usePlannerStore(s => s.addObject)

  const handleAdd = (type: ObjectType) => {
    const newObj = {
      id: generateId(),
      type,
      position: { x: 0, y: 0, z: 0 },
      rotation: { yaw: 0, pitch: 0, roll: 0 },
      scale: { x: 1, y: 1, z: 1 },
      color: 0x888888,
    }
    addObject(newObj)
    outputManager.emit('object:add', newObj.id)
  }

  return (
    <div className={css.cpObjectPalette}>
      <div className={css.cpPaletteHeader}>物体库</div>
      <div className={css.cpPaletteGrid}>
        {OBJECT_TYPES.map(obj => (
          <button
            key={obj.type}
            className={css.cpPaletteItem}
            onClick={() => handleAdd(obj.type)}
            title={obj.label}
          >
            <span className={css.cpIconLg}>{obj.icon}</span>
            <span className={css.cpPaletteLabel}>{obj.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
