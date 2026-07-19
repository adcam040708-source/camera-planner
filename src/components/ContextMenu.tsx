/**
 * ContextMenu — 3D 视口右键上下文菜单
 * 
 * 根据射线拾取结果显示不同的操作选项。
 * 点击外部或按 Escape 自动关闭。
 */

import React, { useEffect, useRef } from 'react'
import css from '../styles.module.css'

export interface ContextMenuAction {
  label: string
  icon?: string
  onClick: () => void
  danger?: boolean
  disabled?: boolean
}

export interface ContextMenuProps {
  x: number
  y: number
  actions: ContextMenuAction[]
  onClose: () => void
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, actions, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleScroll = () => {
      onClose()
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('wheel', handleScroll, { passive: true })

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('wheel', handleScroll)
    }
  }, [onClose])

  if (actions.length === 0) return null

  return (
    <div
      ref={menuRef}
      className={css.cpContextMenu}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      {actions.map((action, idx) => (
        <button
          key={idx}
          className={`${css.cpContextMenuItem} ${action.danger ? css.danger : ''}`}
          onClick={() => {
            if (!action.disabled) {
              action.onClick()
              onClose()
            }
          }}
          disabled={action.disabled}
        >
          {action.icon && <span className={css.cpContextMenuIcon}>{action.icon}</span>}
          <span className={css.cpContextMenuLabel}>{action.label}</span>
        </button>
      ))}
    </div>
  )
}
