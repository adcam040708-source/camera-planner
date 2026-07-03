/**
 * ExportDialog — Export project data or viewport PNG.
 */

import React, { useState } from 'react'
import { usePlannerStore } from '../store/usePlannerStore'
import { outputManager } from './CameraPlanner'

interface ExportDialogProps {
  open: boolean
  onClose: () => void
}

export const ExportDialog: React.FC<ExportDialogProps> = ({ open, onClose }) => {
  const [tab, setTab] = useState<'json' | 'png'>('json')
  const [jsonText, setJsonText] = useState('')
  const project = usePlannerStore(s => s.project)

  if (!open) return null

  const handleExportJSON = () => {
    const data = outputManager.exportProject()
    const text = JSON.stringify(data, null, 2)
    setJsonText(text)
    outputManager.emit('project:export', data)
  }

  const handleDownloadJSON = () => {
    const data = outputManager.exportProject()
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `camera-planner-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleExportPNG = async () => {
    const blob = await outputManager.exportStoryboardPNG()
    if (!blob) return
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `viewport-${Date.now()}.png`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="cp-dialog-overlay" onClick={onClose}>
      <div className="cp-dialog" onClick={e => e.stopPropagation()}>
        <div className="cp-dialog-header">
          <span>导出</span>
          <button className="cp-dialog-close" onClick={onClose}>×</button>
        </div>

        <div className="cp-dialog-tabs">
          <button
            className={`cp-tab-btn ${tab === 'json' ? 'active' : ''}`}
            onClick={() => setTab('json')}
          >JSON 数据</button>
          <button
            className={`cp-tab-btn ${tab === 'png' ? 'active' : ''}`}
            onClick={() => setTab('png')}
          >PNG 截图</button>
        </div>

        <div className="cp-dialog-body">
          {tab === 'json' && (
            <>
              <div className="cp-export-info">
                <div>{project.cameras.length} 个摄像机</div>
                <div>{project.scene.objects.length} 个场景物体</div>
                <div>{project.path.length} 个路径关键帧</div>
              </div>
              {jsonText ? (
                <pre className="cp-export-json">{jsonText}</pre>
              ) : (
                <div className="cp-placeholder">
                  <p>点击下方按钮生成 JSON</p>
                </div>
              )}
              <div className="cp-dialog-actions">
                <button className="cp-btn" onClick={handleExportJSON}>生成 JSON</button>
                <button className="cp-btn cp-btn-primary" onClick={handleDownloadJSON}>下载文件</button>
              </div>
            </>
          )}
          {tab === 'png' && (
            <>
              <div className="cp-placeholder">
                <p>导出当前 3D 视口截图</p>
              </div>
              <div className="cp-dialog-actions">
                <button className="cp-btn cp-btn-primary" onClick={handleExportPNG}>导出 PNG</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
