/**
 * Timeline — Playback controls and timeline scrubber.
 */

import React, { useRef, useCallback } from 'react'
import { usePlannerStore } from '../store/usePlannerStore'
import { outputManager } from './CameraPlanner'
import css from '../styles.module.css'

export const Timeline: React.FC = () => {
  const timeline = usePlannerStore(s => s.project.timeline)
  const setTimelineTime = usePlannerStore(s => s.setTimelineTime)
  const setTimelinePlaying = usePlannerStore(s => s.setTimelinePlaying)
  const animRef = useRef<number | null>(null)
  const startTimeRef = useRef<number>(0)
  const startValueRef = useRef<number>(0)

  const togglePlay = () => {
    if (timeline.playing) {
      // Stop
      if (animRef.current) cancelAnimationFrame(animRef.current)
      animRef.current = null
      setTimelinePlaying(false)
    } else {
      // Start
      setTimelinePlaying(true)
      startTimeRef.current = performance.now()
      startValueRef.current = timeline.currentTime

      const animate = (now: number) => {
        const elapsed = (now - startTimeRef.current) / 1000
        const newTime = startValueRef.current + elapsed
        if (newTime >= timeline.duration) {
          setTimelineTime(0)
          setTimelinePlaying(false)
          return
        }
        setTimelineTime(newTime)
        outputManager.emit('timeline:change', newTime)
        animRef.current = requestAnimationFrame(animate)
      }
      animRef.current = requestAnimationFrame(animate)
    }
  }

  const handleScrub = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value)
    setTimelineTime(time)
    outputManager.emit('timeline:change', time)
  }, [setTimelineTime])

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    const ms = Math.floor((seconds % 1) * 10)
    return `${m}:${s.toString().padStart(2, '0')}.${ms}`
  }

  return (
    <div className={css.cpTimeline}>
      <div className={css.cpTimelineControls}>
        <button
          className={css.cpPlayBtn}
          onClick={togglePlay}
          title={timeline.playing ? '暂停' : '播放'}
        >
          {timeline.playing ? '⏸' : '▶'}
        </button>
        <button
          className={css.cpTimelineBtn}
          onClick={() => { setTimelineTime(0); setTimelinePlaying(false) }}
          title="重置"
        >
          ⏮
        </button>
        <span className={css.cpTimelineTime}>
          {formatTime(timeline.currentTime)} / {formatTime(timeline.duration)}
        </span>
      </div>
      <div className={css.cpTimelineTrack}>
        <input
          type="range"
          min="0"
          max={timeline.duration}
          step="0.1"
          value={timeline.currentTime}
          onChange={handleScrub}
          className={css.cpTimelineSlider}
        />
        <div className={css.cpTimelineMarkers}>
          {Array.from({ length: Math.ceil(timeline.duration / 5) + 1 }, (_, i) => (
            <span key={i} className={css.cpTimelineMark} style={{ left: `${(i * 5 / timeline.duration) * 100}%` }}>
              {i * 5}s
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
