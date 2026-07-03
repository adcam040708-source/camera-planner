/**
 * Sidebar — Left panel with tabs: cameras, objects, templates, characters.
 */

import React from 'react'
import { usePlannerStore, SideTab } from '../store/usePlannerStore'
import { CameraList } from './CameraList'
import { ObjectPalette } from './ObjectPalette'
import { SceneTemplates } from './SceneTemplates'

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
    <div className="cp-sidebar">
      <div className="cp-sidebar-tabs">
        {TABS.map(t => (
          <button
            key={t.value}
            className={`cp-tab-btn ${sideTab === t.value ? 'active' : ''}`}
            onClick={() => setSideTab(t.value)}
            title={t.label}
          >
            <span className="cp-icon">{t.icon}</span>
            <span className="cp-tab-label">{t.label}</span>
          </button>
        ))}
      </div>
      <div className="cp-sidebar-content">
        {sideTab === 'cameras' && <CameraList />}
        {sideTab === 'objects' && <ObjectPalette />}
        {sideTab === 'templates' && <SceneTemplates />}
        {sideTab === 'characters' && (
          <div className="cp-placeholder">
            <p>角色面板（待开发）</p>
            <p className="cp-hint">从剧本导入角色，自动分配位置</p>
          </div>
        )}
      </div>
    </div>
  )
}
