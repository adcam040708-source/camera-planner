/**
 * TopToolbar — Mode selection, tool selection, undo/redo, toggles, export.
 */

import React from 'react'
import { usePlannerStore, EditorMode, ToolMode } from '../store/usePlannerStore'

const MODES: { value: EditorMode; label: string; icon: string }[] = [
  { value: 'select', label: '选择', icon: '↖' },
  { value: 'place', label: '放置', icon: '⊕' },
  { value: 'move', label: '移动', icon: '✥' },
  { value: 'rotate', label: '旋转', icon: '↻' },
]

const TOOLS: { value: ToolMode; label: string; icon: string }[] = [
  { value: 'camera', label: '摄像机', icon: '📷' },
  { value: 'object', label: '物体', icon: '📦' },
  { value: 'light', label: '灯光', icon: '💡' },
  { value: 'path', label: '路径', icon: '〰' },
]

interface TopToolbarProps {
  onExport?: () => void
}

export const TopToolbar: React.FC<TopToolbarProps> = ({ onExport }) => {
  const mode = usePlannerStore(s => s.mode)
  const tool = usePlannerStore(s => s.tool)
  const showGrid = usePlannerStore(s => s.showGrid)
  const showAxes = usePlannerStore(s => s.showAxes)
  const setMode = usePlannerStore(s => s.setMode)
  const setTool = usePlannerStore(s => s.setTool)
  const toggleGrid = usePlannerStore(s => s.toggleGrid)
  const toggleAxes = usePlannerStore(s => s.toggleAxes)
  const undo = usePlannerStore(s => s.undo)
  const redo = usePlannerStore(s => s.redo)

  return (
    <div className="cp-toolbar">
      <div className="cp-toolbar-group">
        <span className="cp-toolbar-label">模式</span>
        {MODES.map(m => (
          <button
            key={m.value}
            className={`cp-toolbar-btn ${mode === m.value ? 'active' : ''}`}
            onClick={() => setMode(m.value)}
            title={m.label}
          >
            <span className="cp-icon">{m.icon}</span>
          </button>
        ))}
      </div>

      <div className="cp-toolbar-sep" />

      <div className="cp-toolbar-group">
        <span className="cp-toolbar-label">工具</span>
        {TOOLS.map(t => (
          <button
            key={t.value}
            className={`cp-toolbar-btn ${tool === t.value ? 'active' : ''}`}
            onClick={() => setTool(t.value)}
            title={t.label}
          >
            <span className="cp-icon">{t.icon}</span>
          </button>
        ))}
      </div>

      <div className="cp-toolbar-sep" />

      <div className="cp-toolbar-group">
        <button className="cp-toolbar-btn" onClick={undo} title="撤销 (Ctrl+Z)">↩</button>
        <button className="cp-toolbar-btn" onClick={redo} title="重做 (Ctrl+Y)">↪</button>
      </div>

      <div className="cp-toolbar-sep" />

      <div className="cp-toolbar-group">
        <button
          className={`cp-toolbar-btn ${showGrid ? 'active' : ''}`}
          onClick={toggleGrid}
          title="网格"
        >#</button>
        <button
          className={`cp-toolbar-btn ${showAxes ? 'active' : ''}`}
          onClick={toggleAxes}
          title="坐标轴"
        >+</button>
      </div>

      <div className="cp-toolbar-spacer" />

      {onExport && (
        <button className="cp-toolbar-btn cp-toolbar-export" onClick={onExport}>
          导出
        </button>
      )}
    </div>
  )
}
