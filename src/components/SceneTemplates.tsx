/**
 * SceneTemplates — Scene template cards to load presets.
 */

import React from 'react'
import { usePlannerStore } from '../store/usePlannerStore'
import { outputManager } from './CameraPlanner'
import { SCENE_PRESETS } from '../presets/templates'
import { generateId } from '../engine/calc'

export const SceneTemplates: React.FC = () => {
  const setSceneConfig = usePlannerStore(s => s.setSceneConfig)

  const handleSelect = (preset: typeof SCENE_PRESETS[number]) => {
    const objects = preset.objects.map(o => ({
      ...o,
      id: generateId(),
    }))

    setSceneConfig({
      template: preset.template,
      objects,
    })

    outputManager.emit('scene:change', {
      template: preset.template,
      objects,
      lighting: usePlannerStore.getState().project.scene.lighting,
    })
  }

  return (
    <div className="cp-scene-templates">
      <div className="cp-templates-header">场景模板</div>
      <div className="cp-templates-grid">
        {SCENE_PRESETS.map(preset => (
          <button
            key={preset.template}
            className="cp-template-card"
            onClick={() => handleSelect(preset)}
          >
            <span className="cp-icon-xl">{preset.icon}</span>
            <div className="cp-template-info">
              <div className="cp-template-name">{preset.label}</div>
              <div className="cp-template-en">{preset.labelEn}</div>
              <div className="cp-template-count">{preset.objects.length} 个物体</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
