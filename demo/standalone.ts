/**
 * Standalone demo — uses engine layer directly, no React needed.
 * Bundled by esbuild into a single HTML file for GitHub Pages.
 */

import { SceneEngine } from '../src/engine/SceneEngine'
import { CameraRig } from '../src/engine/CameraRig'
import { ObjectLib } from '../src/engine/ObjectLib'
import { LightSystem } from '../src/engine/LightSystem'
import { PathSystem } from '../src/engine/PathSystem'
import { RayPicker } from '../src/engine/RayPicker'
import { calcFOV, calcDOF, generateId } from '../src/engine/calc'
import { SENSOR_PRESETS } from '../src/presets/sensors'
import { SCENE_PRESETS } from '../src/presets/templates'
import { LIGHT_PRESETS } from '../src/presets/lights'
import { MOVEMENT_PRESETS } from '../src/presets/movements'

// ============================================================
// Init
// ============================================================

const container = document.getElementById('viewport')!
const engine = new SceneEngine({ container, shadows: true, showGrid: true, showAxes: true })
const cameraRig = new CameraRig(engine.scene)
const objectLib = new ObjectLib(engine.scene)
const lightSystem = new LightSystem(engine.scene)
const pathSystem = new PathSystem(engine.scene)
const rayPicker = new RayPicker(engine.camera, engine.scene)

rayPicker.setCameraGroups(cameraRig.getAllMeshGroups())
rayPicker.setObjectMeshes(objectLib.getAllMeshes())
rayPicker.enable(engine.getCanvas())

engine.start()

// ============================================================
// State
// ============================================================

let selectedCameraId: string | null = null
const cameras: ReturnType<typeof cameraRig.addCamera>[] = []
const history: string[] = []
let historyIdx = -1

function saveState() {
  const data = JSON.stringify(cameraRig.getAllCameras())
  history.splice(historyIdx + 1)
  history.push(data)
  if (history.length > 50) history.shift()
  historyIdx = history.length - 1
}

function undo() {
  if (historyIdx <= 0) return
  historyIdx--
  restoreState(history[historyIdx])
}

function redo() {
  if (historyIdx >= history.length - 1) return
  historyIdx++
  restoreState(history[historyIdx])
}

function restoreState(json: string) {
  const data = JSON.parse(json)
  cameraRig.clearAll()
  for (const cam of data) {
    cameraRig.addCamera(cam)
  }
  refreshCameraList()
  rayPicker.setCameraGroups(cameraRig.getAllMeshGroups())
}

// ============================================================
// Ray picker → selection
// ============================================================

rayPicker.onPick((result) => {
  if (result.target === 'camera' && result.id) {
    selectedCameraId = result.id
    cameraRig.selectCamera(result.id)
    refreshCameraList()
    refreshPropertyPanel()
  } else if (result.target === 'object' && result.id) {
    selectedCameraId = null
    cameraRig.selectCamera(null)
    refreshCameraList()
    refreshObjectProps(result.id)
  }
})

// ============================================================
// UI: Camera List (Sidebar)
// ============================================================

const cameraListEl = document.getElementById('camera-list')!

function refreshCameraList() {
  const cams = cameraRig.getAllCameras()
  cameraListEl.innerHTML = ''
  cams.forEach(cam => {
    const div = document.createElement('div')
    div.className = `cam-item ${cam.id === selectedCameraId ? 'selected' : ''}`
    div.innerHTML = `
      <div class="cam-color" style="background:#${cam.color.toString(16).padStart(6, '0')}"></div>
      <div class="cam-info">
        <div class="cam-name">${cam.name}</div>
        <div class="cam-meta">${cam.focal}mm · f/${cam.fstop} · FOV ${cam.fov.toFixed(1)}°</div>
      </div>
      <button class="cam-del" data-id="${cam.id}">×</button>
    `
    div.addEventListener('click', (e) => {
      if ((e.target as HTMLElement).classList.contains('cam-del')) {
        cameraRig.deleteCamera(cam.id)
        if (selectedCameraId === cam.id) {
          selectedCameraId = null
          refreshPropertyPanel()
        }
        saveState()
        refreshCameraList()
        rayPicker.setCameraGroups(cameraRig.getAllMeshGroups())
        return
      }
      selectedCameraId = cam.id
      cameraRig.selectCamera(cam.id)
      refreshCameraList()
      refreshPropertyPanel()
    })
    cameraListEl.appendChild(div)
  })
}

// Add camera button
document.getElementById('btn-add-camera')!.addEventListener('click', () => {
  const sensor = SENSOR_PRESETS[0]
  const focal = 50
  const cam = cameraRig.addCamera({
    focal,
    sensorW: sensor.w,
    sensorH: sensor.h,
    fstop: 2.8,
    focusDist: 5,
    height: 1.6,
    position: { x: (Math.random() - 0.5) * 6, y: 1.6, z: (Math.random() - 0.5) * 6 },
    rotation: { yaw: Math.random() * 360 - 180, pitch: 0, roll: 0 },
    color: 0x7c83ff,
  })
  selectedCameraId = cam.id
  cameraRig.selectCamera(cam.id)
  saveState()
  refreshCameraList()
  refreshPropertyPanel()
  rayPicker.setCameraGroups(cameraRig.getAllMeshGroups())
})

// ============================================================
// UI: Property Panel
// ============================================================

const propPanel = document.getElementById('prop-panel')!

function refreshPropertyPanel() {
  if (!selectedCameraId) {
    propPanel.innerHTML = '<div class="placeholder">选择机位查看属性</div>'
    return
  }
  const cam = cameraRig.getCamera(selectedCameraId)
  if (!cam) return

  propPanel.innerHTML = `
    <div class="section">
      <div class="section-title">摄像机参数</div>
      <div class="field">
        <label>名称</label>
        <input type="text" id="p-name" value="${cam.name}">
      </div>
      <div class="field">
        <label>焦距</label>
        <input type="range" id="p-focal" min="8" max="300" step="1" value="${cam.focal}">
        <span class="val" id="v-focal">${cam.focal}mm</span>
      </div>
      <div class="field">
        <label>传感器</label>
        <select id="p-sensor">
          ${SENSOR_PRESETS.map(s => `<option value="${s.name}" ${Math.abs(s.w - cam.sensorW) < 0.1 ? 'selected' : ''}>${s.label}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label>光圈</label>
        <input type="range" id="p-fstop" min="1.2" max="22" step="0.1" value="${cam.fstop}">
        <span class="val" id="v-fstop">f/${cam.fstop.toFixed(1)}</span>
      </div>
      <div class="field">
        <label>对焦</label>
        <input type="range" id="p-focus" min="0.3" max="100" step="0.1" value="${cam.focusDist}">
        <span class="val" id="v-focus">${cam.focusDist.toFixed(1)}m</span>
      </div>
    </div>
    <div class="section">
      <div class="section-title">位置</div>
      <div class="field-row"><label>X</label><input type="number" id="p-px" step="0.1" value="${cam.position.x.toFixed(1)}"></div>
      <div class="field-row"><label>Y</label><input type="number" id="p-py" step="0.1" value="${cam.position.y.toFixed(1)}"></div>
      <div class="field-row"><label>Z</label><input type="number" id="p-pz" step="0.1" value="${cam.position.z.toFixed(1)}"></div>
    </div>
    <div class="section">
      <div class="section-title">旋转</div>
      <div class="field"><label>Yaw</label><input type="range" id="p-yaw" min="-180" max="180" step="1" value="${cam.rotation.yaw}"><span class="val" id="v-yaw">${cam.rotation.yaw}°</span></div>
      <div class="field"><label>Pitch</label><input type="range" id="p-pitch" min="-90" max="90" step="1" value="${cam.rotation.pitch}"><span class="val" id="v-pitch">${cam.rotation.pitch}°</span></div>
    </div>
    <div class="section">
      <div class="section-title">计算值</div>
      <div class="calc-row"><span>FOV</span><span class="calc-val">${cam.fov.toFixed(1)}°</span></div>
      <div class="calc-row"><span>景深范围</span><span class="calc-val">${cam.dof.range === Infinity ? '∞' : cam.dof.range.toFixed(2) + 'm'}</span></div>
      <div class="calc-row"><span>近焦</span><span class="calc-val">${cam.dof.near.toFixed(2)}m</span></div>
      <div class="calc-row"><span>远焦</span><span class="calc-val">${cam.dof.far === Infinity ? '∞' : cam.dof.far.toFixed(2) + 'm'}</span></div>
    </div>
    <div class="section">
      <div class="section-title">运镜</div>
      <select id="p-movement">
        <option value="">无</option>
        ${MOVEMENT_PRESETS.map(p => `<option value="${p.type}" ${cam.movement?.type === p.type ? 'selected' : ''}>${p.label} (${p.labelEn})</option>`).join('')}
      </select>
    </div>
  `

  // Wire up event listeners
  const update = (params: Record<string, unknown>) => {
    cameraRig.updateCamera(selectedCameraId!, params)
    saveState()
    refreshCameraList()
    refreshPropertyPanel()
    rayPicker.setCameraGroups(cameraRig.getAllMeshGroups())
  }

  propPanel.querySelector<HTMLInputElement>('#p-name')?.addEventListener('change', e => update({ name: (e.target as HTMLInputElement).value }))
  propPanel.querySelector<HTMLInputElement>('#p-focal')?.addEventListener('input', e => update({ focal: Number((e.target as HTMLInputElement).value) }))
  propPanel.querySelector<HTMLSelectElement>('#p-sensor')?.addEventListener('change', e => {
    const s = SENSOR_PRESETS.find(p => p.name === (e.target as HTMLSelectElement).value)
    if (s) update({ sensorW: s.w, sensorH: s.h })
  })
  propPanel.querySelector<HTMLInputElement>('#p-fstop')?.addEventListener('input', e => update({ fstop: Number((e.target as HTMLInputElement).value) }))
  propPanel.querySelector<HTMLInputElement>('#p-focus')?.addEventListener('input', e => update({ focusDist: Number((e.target as HTMLInputElement).value) }))

  propPanel.querySelector<HTMLInputElement>('#p-px')?.addEventListener('change', e => {
    const cam = cameraRig.getCamera(selectedCameraId!)!
    update({ position: { ...cam.position, x: Number((e.target as HTMLInputElement).value) } })
  })
  propPanel.querySelector<HTMLInputElement>('#p-py')?.addEventListener('change', e => {
    const cam = cameraRig.getCamera(selectedCameraId!)!
    update({ position: { ...cam.position, y: Number((e.target as HTMLInputElement).value) } })
  })
  propPanel.querySelector<HTMLInputElement>('#p-pz')?.addEventListener('change', e => {
    const cam = cameraRig.getCamera(selectedCameraId!)!
    update({ position: { ...cam.position, z: Number((e.target as HTMLInputElement).value) } })
  })

  propPanel.querySelector<HTMLInputElement>('#p-yaw')?.addEventListener('input', e => {
    const cam = cameraRig.getCamera(selectedCameraId!)!
    update({ rotation: { ...cam.rotation, yaw: Number((e.target as HTMLInputElement).value) } })
  })
  propPanel.querySelector<HTMLInputElement>('#p-pitch')?.addEventListener('input', e => {
    const cam = cameraRig.getCamera(selectedCameraId!)!
    update({ rotation: { ...cam.rotation, pitch: Number((e.target as HTMLInputElement).value) } })
  })
}

function refreshObjectProps(_objectId: string) {
  propPanel.innerHTML = '<div class="placeholder">物体属性（点击场景物体查看）</div>'
}

// ============================================================
// UI: Object Palette
// ============================================================

const objPalette = document.getElementById('obj-palette')!
const OBJ_TYPES = [
  { type: 'box', label: '方块', icon: '⬜' },
  { type: 'sphere', label: '球体', icon: '⚪' },
  { type: 'cone', label: '锥体', icon: '△' },
  { type: 'cylinder', label: '柱体', icon: '▮' },
  { type: 'person', label: '人物', icon: '🧍' },
  { type: 'building', label: '建筑', icon: '🏢' },
  { type: 'car', label: '车辆', icon: '🚗' },
  { type: 'tree', label: '树木', icon: '🌳' },
] as const

OBJ_TYPES.forEach(obj => {
  const btn = document.createElement('button')
  btn.className = 'obj-btn'
  btn.innerHTML = `<span class="obj-icon">${obj.icon}</span><span class="obj-label">${obj.label}</span>`
  btn.addEventListener('click', () => {
    objectLib.addObject({
      type: obj.type,
      position: { x: (Math.random() - 0.5) * 6, y: 0, z: (Math.random() - 0.5) * 6 },
      rotation: { yaw: 0, pitch: 0, roll: 0 },
      scale: { x: 1, y: 1, z: 1 },
      color: 0x888888,
    })
    rayPicker.setObjectMeshes(objectLib.getAllMeshes())
  })
  objPalette.appendChild(btn)
})

// ============================================================
// UI: Scene Templates
// ============================================================

const templateList = document.getElementById('template-list')!
SCENE_PRESETS.forEach(preset => {
  const btn = document.createElement('button')
  btn.className = 'template-btn'
  btn.innerHTML = `<span class="tpl-icon">${preset.icon}</span><span>${preset.label}</span>`
  btn.addEventListener('click', () => {
    objectLib.clearAll()
    for (const obj of preset.objects) {
      objectLib.addObject({ ...obj, type: obj.type })
    }
    rayPicker.setObjectMeshes(objectLib.getAllMeshes())
  })
  templateList.appendChild(btn)
})

// ============================================================
// UI: Toolbar
// ============================================================

document.getElementById('btn-undo')!.addEventListener('click', undo)
document.getElementById('btn-redo')!.addEventListener('click', redo)
document.getElementById('btn-grid')!.addEventListener('click', () => {
  const btn = document.getElementById('btn-grid')!
  btn.classList.toggle('active')
  engine.setGridVisible(btn.classList.contains('active'))
})
document.getElementById('btn-axes')!.addEventListener('click', () => {
  const btn = document.getElementById('btn-axes')!
  btn.classList.toggle('active')
  engine.setAxesVisible(btn.classList.contains('active'))
})
document.getElementById('btn-export')!.addEventListener('click', () => {
  const data = {
    version: '3.0',
    cameras: cameraRig.getAllCameras(),
    scene: { objects: objectLib.getAllObjects(), lighting: lightSystem.getConfig() },
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = `camera-planner-${Date.now()}.json`
  a.click()
})
document.getElementById('btn-png')!.addEventListener('click', () => {
  const url = engine.exportPNG()
  const a = document.createElement('a')
  a.href = url
  a.download = `viewport-${Date.now()}.png`
  a.click()
})

// ============================================================
// UI: Sidebar tabs
// ============================================================

document.querySelectorAll('.sidebar-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.remove('active'))
    tab.classList.add('active')
    const target = (tab as HTMLElement).dataset.tab!
    document.querySelectorAll('.sidebar-panel').forEach(p => (p as HTMLElement).style.display = 'none')
    document.getElementById(`panel-${target}`)!.style.display = 'block'
  })
})

// ============================================================
// UI: Bottom panel tabs
// ============================================================

document.querySelectorAll('.bottom-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.bottom-tab').forEach(t => t.classList.remove('active'))
    tab.classList.add('active')
    const target = (tab as HTMLElement).dataset.tab!
    document.querySelectorAll('.bottom-panel').forEach(p => (p as HTMLElement).style.display = 'none')
    document.getElementById(`bpanel-${target}`)!.style.display = 'block'
  })
})

// ============================================================
// UI: Lighting presets
// ============================================================

const lightSelect = document.getElementById('light-preset') as HTMLSelectElement
lightSelect?.addEventListener('change', () => {
  lightSystem.applyPreset(lightSelect.value)
})

// ============================================================
// Keyboard shortcuts
// ============================================================

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'z') { e.preventDefault(); undo() }
  if (e.ctrlKey && e.key === 'y') { e.preventDefault(); redo() }
})

// ============================================================
// Load sample data
// ============================================================

// Floor
objectLib.addObject({ type: 'plane', position: { x: 0, y: 0, z: 0 }, rotation: { yaw: 0, pitch: 0, roll: 0 }, scale: { x: 20, y: 1, z: 20 }, color: 0x2a2a2a })

// Actors
objectLib.addObject({ type: 'person', position: { x: 0, y: 0, z: 0 }, rotation: { yaw: 0, pitch: 0, roll: 0 }, scale: { x: 1, y: 1, z: 1 }, color: 0x888888 })
objectLib.addObject({ type: 'person', position: { x: 2, y: 0, z: -1 }, rotation: { yaw: -30, pitch: 0, roll: 0 }, scale: { x: 1, y: 1, z: 1 }, color: 0x666666 })

// Desk
objectLib.addObject({ type: 'box', position: { x: -2, y: 0.35, z: 0 }, rotation: { yaw: 0, pitch: 0, roll: 0 }, scale: { x: 2, y: 0.7, z: 1 }, color: 0x654321 })

rayPicker.setObjectMeshes(objectLib.getAllMeshes())

// Sample cameras
const cam1 = cameraRig.addCamera({
  name: 'CAM-01', focal: 50, sensorW: 36, sensorH: 24, fstop: 2.8, focusDist: 5,
  height: 1.6, position: { x: -3, y: 1.6, z: 5 }, rotation: { yaw: -20, pitch: 0, roll: 0 }, color: 0x7c83ff,
})
const cam2 = cameraRig.addCamera({
  name: 'CAM-02', focal: 85, sensorW: 36, sensorH: 24, fstop: 1.8, focusDist: 8,
  height: 1.8, position: { x: 4, y: 1.8, z: 6 }, rotation: { yaw: 15, pitch: -5, roll: 0 }, color: 0xff6b35,
})
const cam3 = cameraRig.addCamera({
  name: 'CAM-03', focal: 24, sensorW: 29.9, sensorH: 22.2, fstop: 4.0, focusDist: 3,
  height: 3.5, position: { x: 0, y: 3.5, z: -4 }, rotation: { yaw: 180, pitch: -15, roll: 0 }, color: 0x35ffa5,
})

saveState()
refreshCameraList()
rayPicker.setCameraGroups(cameraRig.getAllMeshGroups())

console.log('Camera Planner Pro v3 — Standalone Demo loaded')
console.log(`Cameras: ${cam1.name}, ${cam2.name}, ${cam3.name}`)
console.log('Click cameras in the sidebar to select, use property panel to edit.')
