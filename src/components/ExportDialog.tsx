/**
 * ExportDialog — Export project data or viewport PNG.
 */

import React, { useState } from 'react'
import { usePlannerStore } from '../store/usePlannerStore'
import { outputManager } from './CameraPlanner'
import { jsonPromptExporter } from '../io/JsonPromptExporter'
import css from '../styles.module.css'

interface ExportDialogProps {
  open: boolean
  onClose: () => void
}

export const ExportDialog: React.FC<ExportDialogProps> = ({ open, onClose }) => {
  const [tab, setTab] = useState<'json' | 'prompt' | 'png'>('json')
  const [jsonText, setJsonText] = useState('')
  const [promptText, setPromptText] = useState('')
  const project = usePlannerStore(s => s.project)

  if (!open) return null

  const handleExportJSON = () => {
    const data = outputManager.exportProject()
    const text = JSON.stringify(data, null, 2)
    setJsonText(text)
    outputManager.emit('project:export', data)
  }


  const handleExportPrompt = () => {
    const data = outputManager.exportProject()
    const text = jsonPromptExporter.exportString(data)
    setPromptText(text)
  }

  const handleDownloadPrompt = () => {
    const data = outputManager.exportProject()
    const text = jsonPromptExporter.exportString(data)
    const blob = new Blob([text], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `camera-panner-prompt-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
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
    <div className={css.cpDialogOverlay} onClick={onClose}>
      <div className={css.cpDialog} onClick={e => e.stopPropagation()}>
        <div className={css.cpDialogHeader}>
          <span>导出</span>
          <button className={css.cpDialogClose} onClick={onClose}>×</button>
        </div>

        <div className={css.cpDialogTabs}>
          <button
            className={`${css.cpTabBtn} ${tab === 'json' ? css.active : ''}`}
            onClick={() => setTab('json')}
          >JSON 数据</button>
          <button
            className={`${css.cpTabBtn} ${tab === 'prompt' ? css.active : ''}`}
            onClick={() => setTab('prompt')}
          >JSON Prompt</button>
          <button
            className={`${css.cpTabBtn} ${tab === 'png' ? css.active : ''}`}
            onClick={() => setTab('png')}
          >PNG 截图</button>
        </div>

        <div className={css.cpDialogBody}>
          {tab === 'json' && (
            <>
              <div className={css.cpExportInfo}>
                <div>{project.cameras.length} 个摄像机</div>
                <div>{project.scene.objects.length} 个场景物体</div>
                <div>{project.path.length} 个路径关键帧</div>
              </div>
              {jsonText ? (
                <pre className={css.cpExportJson}>{jsonText}</pre>
              ) : (
                <div className={css.cpPlaceholder}>
                  <p>点击下方按钮生成 JSON</p>
                </div>
              )}
              <div className={css.cpDialogActions}>
                <button className={css.cpBtn} onClick={handleExportJSON}>生成 JSON</button>
                <button className={[css.cpBtn, css.cpBtnPrimary].join(' ')} onClick={handleDownloadJSON}>下载文件</button>
              </div>
            </>
          )}
          {tab === 'prompt' && (
            <>
              <div className={css.cpExportInfo}>
                <div>{project.cameras.length} 个摄像机</div>
                <div>{project.actors.length} 个角色</div>
                <div>{project.scene.objects.length} 个场景物体</div>
                <div>{project.path.length} 个相机路径点</div>
              </div>
              {promptText ? (
                <pre className={css.cpExportJson}>{promptText}</pre>
              ) : (
                <div className={css.cpPlaceholder}>
                  <p>生成结构化 JSON Prompt（含相机/角色/物体动态空间数据）</p>
                </div>
              )}
              <div className={css.cpDialogActions}>
                <button className={css.cpBtn} onClick={handleExportPrompt}>生成 Prompt</button>
                <button className={[css.cpBtn, css.cpBtnPrimary].join(' ')} onClick={handleDownloadPrompt}>下载文件</button>
              </div>
            </>
          )}
          {tab === 'png' && (
            <>
              <div className={css.cpPlaceholder}>
                <p>导出当前 3D 视口截图</p>
              </div>
              <div className={css.cpDialogActions}>
                <button className={[css.cpBtn, css.cpBtnPrimary].join(' ')} onClick={handleExportPNG}>导出 PNG</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
