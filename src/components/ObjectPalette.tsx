/**
 * ObjectPalette — Pick an object type, then click the viewport ground to place it.
 */

import React from 'react'
import { usePlannerStore } from '../store/usePlannerStore'
import { ObjectType } from '../types/scene'
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

/** Rest height so centered primitives sit on the floor. */
export function defaultObjectY(type: ObjectType): number {
  switch (type) {
    case 'box':
    case 'sphere':
    case 'cone':
    case 'cylinder':
      return 0.5
    case 'torus':
      return 0.15
    case 'plane':
      return 0.01
    case 'prop':
      return 0.15
    default:
      return 0
  }
}

export const ObjectPalette: React.FC = () => {
  const pendingObjectType = usePlannerStore(s => s.pendingObjectType)
  const setPendingObjectType = usePlannerStore(s => s.setPendingObjectType)
  const setTool = usePlannerStore(s => s.setTool)
  const setMode = usePlannerStore(s => s.setMode)

  const handleSelect = (type: ObjectType) => {
    setPendingObjectType(type)
    setTool('object')
    setMode('place')
  }

  const pendingLabel = OBJECT_TYPES.find(o => o.type === pendingObjectType)?.label

  return (
    <div className={css.cpObjectPalette}>
      <div className={css.cpPaletteHeader}>物体库</div>
      <div className={css.cpPaletteHint}>
        {pendingObjectType
          ? `已选「${pendingLabel}」→ 在场景地面点击放置`
          : '先点选类型，再在场景地面点击放置'}
      </div>
      <div className={css.cpPaletteGrid}>
        {OBJECT_TYPES.map(obj => (
          <button
            key={obj.type}
            className={`${css.cpPaletteItem} ${pendingObjectType === obj.type ? css.active : ''}`}
            onClick={() => handleSelect(obj.type)}
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
