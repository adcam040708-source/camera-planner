/**
 * BottomPanel — Bottom panel with tabs: timeline, storyboard, keyframes.
 */

import React from 'react'
import { usePlannerStore, BottomTab } from '../store/usePlannerStore'
import { Timeline } from './Timeline'
import { StoryboardGrid } from './StoryboardGrid'
import css from '../styles.module.css'

const TABS: { value: BottomTab; label: string }[] = [
  { value: 'timeline', label: '时间线' },
  { value: 'storyboard', label: '分镜表' },
  { value: 'keyframes', label: '关键帧' },
]

export const BottomPanel: React.FC = () => {
  const bottomTab = usePlannerStore(s => s.bottomTab)
  const setBottomTab = usePlannerStore(s => s.setBottomTab)
  const pathPoints = usePlannerStore(s => s.project.path)
  const selectedPathPointId = usePlannerStore(s => s.selectedPathPointId)
  const selectedActorId = usePlannerStore(s => s.selectedActorId)
  const actors = usePlannerStore(s => s.project.actors)
  const timelineDuration = usePlannerStore(s => s.project.timeline.duration)
  const selectPathPoint = usePlannerStore(s => s.selectPathPoint)
  const removePathPoint = usePlannerStore(s => s.removePathPoint)
  const setTimelineTime = usePlannerStore(s => s.setTimelineTime)
  const selectedActor = actors.find(actor => actor.id === selectedActorId)

  const seekTo = (time: number) => {
    setTimelineTime(Math.max(0, Math.min(timelineDuration, time)))
  }

  return (
    <div className={css.cpBottomPanel}>
      <div className={css.cpBottomTabs}>
        {TABS.map(t => (
          <button
            key={t.value}
            className={`${css.cpTabBtn} ${bottomTab === t.value ? css.active : ''}`}
            onClick={() => setBottomTab(t.value)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className={css.cpBottomContent}>
        {bottomTab === 'timeline' && <Timeline />}
        {bottomTab === 'storyboard' && <StoryboardGrid />}
        {bottomTab === 'keyframes' && (
          <div className={css.cpKeyframes}>
            <div className={css.cpKeyframesHeader}>
              <span>机位关键帧 ({pathPoints.length})</span>
              <span className={css.cpKeyframesHint}>K 记录当前选中对象</span>
            </div>
            {pathPoints.length === 0 ? (
              <div className={css.cpEmpty}>暂无机位关键帧。选中机位后按 K 记录。</div>
            ) : (
              <div className={css.cpKeyframesList}>
                {pathPoints.map((p, i) => {
                  const time = p.t * timelineDuration
                  const selected = selectedPathPointId === p.id
                  return (
                    <div
                      key={p.id}
                      className={`${css.cpKeyframeItem} ${selected ? css.selected : ''}`}
                      onClick={() => {
                        selectPathPoint(p.id)
                        seekTo(time)
                      }}
                    >
                      <span className={css.cpKfIndex}>#{i + 1}</span>
                      <span className={css.cpKfPos}>
                        ({p.position.x.toFixed(1)}, {p.position.y.toFixed(1)}, {p.position.z.toFixed(1)})
                      </span>
                      <span className={css.cpKfTime}>t={time.toFixed(1)}s</span>
                      <button
                        className={css.cpKfDelete}
                        onClick={e => {
                          e.stopPropagation()
                          removePathPoint(p.id)
                        }}
                        title="删除关键帧"
                      >
                        ×
                      </button>
                    </div>
                  )
                })}
              </div>
            )}
            {selectedActor && (
              <div className={css.cpActorKeyframesSummary}>
                <span>角色“{selectedActor.name}”关键帧 ({selectedActor.keyframes.length})</span>
                {selectedActor.keyframes.length > 0 && (
                  <span>{selectedActor.keyframes.map(k => `${k.time.toFixed(1)}s`).join(' · ')}</span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
