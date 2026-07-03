/**
 * Sidebar — Left panel with tabs: cameras, objects, templates, characters.
 */

import React from 'react'
import { usePlannerStore, SideTab } from '../store/usePlannerStore'
import { CameraList } from './CameraList'
import { ObjectPalette } from './ObjectPalette'
import { SceneTemplates } from './SceneTemplates'
import css from '../styles.module.css'

const TABS: { value: SideTab; label: string; icon: string }[] = [
  { value: 'cameras', label: '机位', icon: '📷' },
  { value: 'objects', label: '物体', icon: '📦' },
  { value: 'templates', label: '场景', icon: '🏠' },
  { value: 'characters', label: '角色', icon: '👤' },
]

export const Sidebar: React.FC = () => {
  const sideTab = usePlannerStore(s => s.sideTab)
  const setSideTab = usePlannerStore(s => s.setSideTab)

  return (
    <div className={css.cpSidebar}>
      <div className={css.cpSidebarTabs}>
        {TABS.map(t => (
          <button
            key={t.value}
            className={`${css.cpTabBtn} ${sideTab === t.value ? css.active : ''}`}
            onClick={() => setSideTab(t.value)}
            title={t.label}
          >
            <span className={css.cpIcon}>{t.icon}</span>
            <span className={css.cpTabLabel}>{t.label}</span>
          </button>
        ))}
      </div>
      <div className={css.cpSidebarContent}>
        {sideTab === 'cameras' && <CameraList />}
        {sideTab === 'objects' && <ObjectPalette />}
        {sideTab === 'templates' && <SceneTemplates />}
        {sideTab === 'characters' && (
          <div className={css.cpPlaceholder}>
            <p>角色面板（待开发）</p>
            <p className={css.cpHint}>从剧本导入角色，自动分配位置</p>
          </div>
        )}
      </div>
    </div>
  )
}
