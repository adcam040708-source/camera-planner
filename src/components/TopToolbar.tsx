/**
 * TopToolbar — Mode selection, tool selection, undo/redo, toggles, export.
 */

import React from 'react'
import { usePlannerStore, EditorMode, ToolMode } from '../store/usePlannerStore'
import css from '../styles.module.css'

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
  const recordKeyframe = usePlannerStore(s => s.recordKeyframe)

  return (
    <div className={css.cpToolbar}>
      <div className={css.cpToolbarGroup}>
        <span className={css.cpToolbarLabel}>模式</span>
        {MODES.map(m => (
          <button
            key={m.value}
            className={`${css.cpToolbarBtn} ${mode === m.value ? css.active : ''}`}
            onClick={() => setMode(m.value)}
            title={m.label}
          >
            <span className={css.cpIcon}>{m.icon}</span>
          </button>
        ))}
      </div>

      <div className={css.cpToolbarSep} />

      <div className={css.cpToolbarGroup}>
        <span className={css.cpToolbarLabel}>工具</span>
        {TOOLS.map(t => (
          <button
            key={t.value}
            className={`${css.cpToolbarBtn} ${tool === t.value ? css.active : ''}`}
            onClick={() => setTool(t.value)}
            title={t.label}
          >
            <span className={css.cpIcon}>{t.icon}</span>
          </button>
        ))}
      </div>

      <div className={css.cpToolbarSep} />

      <div className={css.cpToolbarGroup}>
        <button
          className={[css.cpToolbarBtn, css.cpRecordBtn].join(' ')}
          onClick={() => recordKeyframe()}
          title="记录关键帧 (K)"
        >
          <span className={css.cpIcon}>◆</span>
          <span className={css.cpRecordLabel}>记录关键帧</span>
        </button>
        <button className={css.cpToolbarBtn} onClick={undo} title="撤销 (Ctrl+Z)">↩</button>
        <button className={css.cpToolbarBtn} onClick={redo} title="重做 (Ctrl+Y)">↪</button>
      </div>

      <div className={css.cpToolbarSep} />

      <div className={css.cpToolbarGroup}>
        <button
          className={`${css.cpToolbarBtn} ${showGrid ? css.active : ''}`}
          onClick={toggleGrid}
          title="网格"
        >#</button>
        <button
          className={`${css.cpToolbarBtn} ${showAxes ? css.active : ''}`}
          onClick={toggleAxes}
          title="坐标轴"
        >+</button>
      </div>

      <div className={css.cpToolbarSpacer} />

      {onExport && (
        <button className={[css.cpToolbarBtn, css.cpToolbarExport].join(' ')} onClick={onExport}>
          导出
        </button>
      )}
    </div>
  )
}
