/**
 * StoryboardGrid — 3x3 or 5x5 storyboard grid.
 * Each cell can be linked to a camera for shot preview.
 */

import React from 'react'
import { usePlannerStore } from '../store/usePlannerStore'
import css from '../styles.module.css'

export const StoryboardGrid: React.FC = () => {
  const storyboard = usePlannerStore(s => s.project.storyboard)
  const cameras = usePlannerStore(s => s.project.cameras)
  const setStoryboardGrid = usePlannerStore(s => s.setStoryboardGrid)
  const setStoryboardCell = usePlannerStore(s => s.setStoryboardCell)
  const selectCamera = usePlannerStore(s => s.selectCamera)

  const cols = storyboard.grid === '5x5' ? 5 : 3
  const totalCells = cols * cols

  const getCellCamera = (index: number) => {
    const cell = storyboard.cells.find(c => c.index === index)
    if (!cell?.cameraId) return null
    return cameras.find(c => c.id === cell.cameraId) || null
  }

  return (
    <div className={css.cpStoryboard}>
      <div className={css.cpStoryboardHeader}>
        <span>分镜表</span>
        <div className={css.cpStoryboardToggle}>
          <button
            className={`${css.cpBtnSm} ${storyboard.grid === '3x3' ? css.active : ''}`}
            onClick={() => setStoryboardGrid('3x3')}
          >3×3</button>
          <button
            className={`${css.cpBtnSm} ${storyboard.grid === '5x5' ? css.active : ''}`}
            onClick={() => setStoryboardGrid('5x5')}
          >5×5</button>
        </div>
      </div>
      <div
        className={css.cpStoryboardGrid}
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {Array.from({ length: totalCells }, (_, i) => {
          const cam = getCellCamera(i)
          return (
            <div
              key={i}
              className={`${css.cpStoryboardCell} ${cam ? css.hasCamera : ''}`}
              onClick={() => {
                if (cam) {
                  selectCamera(cam.id)
                }
              }}
            >
              <div className={css.cpCellNumber}>{i + 1}</div>
              {cam ? (
                <div className={css.cpCellCamera}>
                  <div className={css.cpCellCamName}>{cam.name}</div>
                  <div className={css.cpCellCamMeta}>{cam.focal}mm</div>
                </div>
              ) : (
                <div className={css.cpCellEmpty}>
                  <select
                    value=""
                    onChange={e => {
                      if (e.target.value) {
                        setStoryboardCell(i, e.target.value)
                      }
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    <option value="">分配机位...</option>
                    {cameras.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
