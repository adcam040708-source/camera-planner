/**
 * BottomPanel — Bottom panel with tabs: timeline, storyboard, keyframes.
 */

import React from 'react'
import { usePlannerStore, BottomTab } from '../store/usePlannerStore'
import { Timeline } from './Timeline'
import { StoryboardGrid } from './StoryboardGrid'

const TABS: { value: BottomTab; label: string }[] = [
  { value: 'timeline', label: '时间线' },
  { value: 'storyboard', label: '分镜表' },
  { value: 'keyframes', label: '关键帧' },
]

export const BottomPanel: React.FC = () => {
  const bottomTab = usePlannerStore(s => s.bottomTab)
  const setBottomTab = usePlannerStore(s => s.setBottomTab)
  const pathPoints = usePlannerStore(s => s.project.path)

  return (
    <div className="cp-bottom-panel">
      <div className="cp-bottom-tabs">
        {TABS.map(t => (
          <button
            key={t.value}
            className={`cp-tab-btn ${bottomTab === t.value ? 'active' : ''}`}
            onClick={() => setBottomTab(t.value)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="cp-bottom-content">
        {bottomTab === 'timeline' && <Timeline />}
        {bottomTab === 'storyboard' && <StoryboardGrid />}
        {bottomTab === 'keyframes' && (
          <div className="cp-keyframes">
            <div className="cp-keyframes-header">
              关键帧 ({pathPoints.length})
            </div>
            {pathPoints.length === 0 ? (
              <div className="cp-empty">暂无关键帧。在路径工具模式下点击场景添加。</div>
            ) : (
              <div className="cp-keyframes-list">
                {pathPoints.map((p, i) => (
                  <div key={p.id} className="cp-keyframe-item">
                    <span className="cp-kf-index">#{i + 1}</span>
                    <span className="cp-kf-pos">
                      ({p.position.x.toFixed(1)}, {p.position.y.toFixed(1)}, {p.position.z.toFixed(1)})
                    </span>
                    <span className="cp-kf-time">t={p.t.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
