/**
 * PropertyPanel — Right panel showing properties of selected camera or object.
 */

import React from 'react'
import { usePlannerStore } from '../store/usePlannerStore'
import { outputManager } from './CameraPlanner'
import { SENSOR_PRESETS } from '../presets/sensors'
import { MOVEMENT_PRESETS } from '../presets/movements'
import { Camera } from '../types/camera'

export const PropertyPanel: React.FC = () => {
  const selectedCameraId = usePlannerStore(s => s.selectedCameraId)
  const selectedObjectId = usePlannerStore(s => s.selectedObjectId)
  const cameras = usePlannerStore(s => s.project.cameras)
  const sceneObjects = usePlannerStore(s => s.project.scene.objects)
  const updateCamera = usePlannerStore(s => s.updateCamera)
  const updateObject = usePlannerStore(s => s.updateObject)

  const selectedCamera = cameras.find(c => c.id === selectedCameraId)
  const selectedObject = sceneObjects.find(o => o.id === selectedObjectId)

  if (!selectedCamera && !selectedObject) {
    return (
      <div className="cp-property-panel">
        <div className="cp-placeholder">
          <p>选择机位或物体查看属性</p>
        </div>
      </div>
    )
  }

  if (selectedCamera) {
    return <CameraProperties camera={selectedCamera} onUpdate={updateCamera} />
  }

  if (selectedObject) {
    return <ObjectProperties object={selectedObject} onUpdate={updateObject} />
  }

  return null
}

// --- Camera Properties ---

interface CameraPropsProps {
  camera: Camera
  onUpdate: (id: string, params: Partial<Camera>) => void
}

const CameraProperties: React.FC<CameraPropsProps> = ({ camera, onUpdate }) => {
  const handleChange = (field: keyof Camera, value: number | string) => {
    const params: Partial<Camera> = { [field]: value }
    onUpdate(camera.id, params)
    outputManager.emit('camera:change', { ...camera, ...params } as Camera)
  }

  const handlePositionChange = (axis: 'x' | 'y' | 'z', value: number) => {
    const newPosition = { ...camera.position, [axis]: value }
    onUpdate(camera.id, { position: newPosition })
    outputManager.emit('camera:change', { ...camera, position: newPosition } as Camera)
  }

  const handleRotationChange = (axis: 'yaw' | 'pitch' | 'roll', value: number) => {
    const newRotation = { ...camera.rotation, [axis]: value }
    onUpdate(camera.id, { rotation: newRotation })
    outputManager.emit('camera:change', { ...camera, rotation: newRotation } as Camera)
  }

  const handleSensorChange = (sensorName: string) => {
    const sensor = SENSOR_PRESETS.find(s => s.name === sensorName)
    if (!sensor) return
    onUpdate(camera.id, { sensorW: sensor.w, sensorH: sensor.h })
  }

  return (
    <div className="cp-property-panel">
      <div className="cp-panel-section">
        <div className="cp-section-title">摄像机参数</div>

        <div className="cp-field">
          <label>名称</label>
          <input
            type="text"
            value={camera.name}
            onChange={e => handleChange('name', e.target.value)}
          />
        </div>

        <div className="cp-field">
          <label>焦距 (mm)</label>
          <input
            type="range" min="8" max="300" step="1"
            value={camera.focal}
            onChange={e => handleChange('focal', Number(e.target.value))}
          />
          <span className="cp-field-value">{camera.focal}mm</span>
        </div>

        <div className="cp-field">
          <label>传感器</label>
          <select
            value={SENSOR_PRESETS.find(s =>
              Math.abs(s.w - camera.sensorW) < 0.1 && Math.abs(s.h - camera.sensorH) < 0.1
            )?.name || ''}
            onChange={e => handleSensorChange(e.target.value)}
          >
            {SENSOR_PRESETS.map(s => (
              <option key={s.name} value={s.name}>{s.label}</option>
            ))}
          </select>
        </div>

        <div className="cp-field">
          <label>光圈 (f/)</label>
          <input
            type="range" min="1.2" max="22" step="0.1"
            value={camera.fstop}
            onChange={e => handleChange('fstop', Number(e.target.value))}
          />
          <span className="cp-field-value">f/{camera.fstop.toFixed(1)}</span>
        </div>

        <div className="cp-field">
          <label>对焦距离 (m)</label>
          <input
            type="range" min="0.3" max="100" step="0.1"
            value={camera.focusDist}
            onChange={e => handleChange('focusDist', Number(e.target.value))}
          />
          <span className="cp-field-value">{camera.focusDist.toFixed(1)}m</span>
        </div>
      </div>

      <div className="cp-panel-section">
        <div className="cp-section-title">位置</div>
        {(['x', 'y', 'z'] as const).map(axis => (
          <div className="cp-field cp-field-row" key={axis}>
            <label>{axis.toUpperCase()}</label>
            <input
              type="number" step="0.1"
              value={camera.position[axis]}
              onChange={e => handlePositionChange(axis, Number(e.target.value))}
            />
          </div>
        ))}
      </div>

      <div className="cp-panel-section">
        <div className="cp-section-title">旋转</div>
        {(['yaw', 'pitch', 'roll'] as const).map(axis => (
          <div className="cp-field cp-field-row" key={axis}>
            <label>{axis}</label>
            <input
              type="range" min="-180" max="180" step="1"
              value={camera.rotation[axis]}
              onChange={e => handleRotationChange(axis, Number(e.target.value))}
            />
            <span className="cp-field-value">{camera.rotation[axis]}°</span>
          </div>
        ))}
      </div>

      <div className="cp-panel-section">
        <div className="cp-section-title">计算值</div>
        <div className="cp-calc-row">
          <span>FOV</span>
          <span className="cp-calc-value">{camera.fov.toFixed(1)}°</span>
        </div>
        <div className="cp-calc-row">
          <span>景深范围</span>
          <span className="cp-calc-value">
            {camera.dof.range === Infinity ? '∞' : `${camera.dof.range.toFixed(2)}m`}
          </span>
        </div>
        <div className="cp-calc-row">
          <span>近焦</span>
          <span className="cp-calc-value">{camera.dof.near.toFixed(2)}m</span>
        </div>
        <div className="cp-calc-row">
          <span>远焦</span>
          <span className="cp-calc-value">
            {camera.dof.far === Infinity ? '∞' : `${camera.dof.far.toFixed(2)}m`}
          </span>
        </div>
      </div>

      <div className="cp-panel-section">
        <div className="cp-section-title">运镜</div>
        <select
          value={camera.movement?.type || ''}
          onChange={e => {
            const preset = MOVEMENT_PRESETS.find(p => p.type === e.target.value)
            if (preset) {
              onUpdate(camera.id, {
                movement: { type: preset.type, duration: preset.defaultDuration },
              })
            }
          }}
        >
          <option value="">无</option>
          {MOVEMENT_PRESETS.map(p => (
            <option key={p.type} value={p.type}>{p.label} ({p.labelEn})</option>
          ))}
        </select>
      </div>
    </div>
  )
}

// --- Object Properties ---

interface ObjectPropsProps {
  object: import('../types/scene').SceneObject
  onUpdate: (id: string, params: Partial<import('../types/scene').SceneObject>) => void
}

const ObjectProperties: React.FC<ObjectPropsProps> = ({ object, onUpdate }) => {
  const handlePositionChange = (axis: 'x' | 'y' | 'z', value: number) => {
    onUpdate(object.id, { position: { ...object.position, [axis]: value } })
  }

  const handleScaleChange = (axis: 'x' | 'y' | 'z', value: number) => {
    onUpdate(object.id, { scale: { ...object.scale, [axis]: value } })
  }

  return (
    <div className="cp-property-panel">
      <div className="cp-panel-section">
        <div className="cp-section-title">物体: {object.type}</div>
        <div className="cp-calc-row">
          <span>ID</span>
          <span className="cp-calc-value cp-mono">{object.id.slice(0, 8)}</span>
        </div>
      </div>

      <div className="cp-panel-section">
        <div className="cp-section-title">位置</div>
        {(['x', 'y', 'z'] as const).map(axis => (
          <div className="cp-field cp-field-row" key={axis}>
            <label>{axis.toUpperCase()}</label>
            <input
              type="number" step="0.1"
              value={object.position[axis]}
              onChange={e => handlePositionChange(axis, Number(e.target.value))}
            />
          </div>
        ))}
      </div>

      <div className="cp-panel-section">
        <div className="cp-section-title">缩放</div>
        {(['x', 'y', 'z'] as const).map(axis => (
          <div className="cp-field cp-field-row" key={axis}>
            <label>{axis.toUpperCase()}</label>
            <input
              type="number" step="0.1" min="0.1"
              value={object.scale[axis]}
              onChange={e => handleScaleChange(axis, Number(e.target.value))}
            />
          </div>
        ))}
      </div>

      <div className="cp-panel-section">
        <div className="cp-section-title">颜色</div>
        <div className="cp-field">
          <input
            type="color"
            value={`#${object.color.toString(16).padStart(6, '0')}`}
            onChange={e => onUpdate(object.id, { color: parseInt(e.target.value.slice(1), 16) })}
          />
        </div>
      </div>
    </div>
  )
}
