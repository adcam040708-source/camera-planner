// Core camera types

export interface Position3D {
  x: number
  y: number
  z: number
}

export interface Rotation3D {
  yaw: number    // degrees, horizontal
  pitch: number  // degrees, vertical
  roll: number   // degrees
}

export interface SensorPreset {
  name: string
  label: string
  w: number      // mm
  h: number      // mm
}

export interface DOFResult {
  near: number   // m
  far: number    // m
  range: number  // m
}

export interface MovementConfig {
  type: MovementType
  duration: number       // seconds
  start?: Position3D
  end?: Position3D
  startRotation?: Rotation3D
  endRotation?: Rotation3D
}

export type MovementType =
  | 'push'       // 推进
  | 'pull'       // 拉出
  | 'pan'        // 摇镜（水平）
  | 'tilt'       // 俯仰
  | 'track'      // 跟踪平移
  | 'orbit'      // 环绕
  | 'crane_up'   // 升起
  | 'crane_down' // 降下

export interface ScriptBinding {
  sceneId?: string
  shotId?: string
  description?: string
  dialogue?: string
  action?: string
}

export interface Camera {
  id: string
  name: string
  focal: number            // mm
  sensorW: number          // mm
  sensorH: number          // mm
  fstop: number
  focusDist: number        // m
  height: number           // m
  position: Position3D
  rotation: Rotation3D
  fov: number              // calculated
  dof: DOFResult           // calculated
  color: number            // hex
  movement?: MovementConfig
  script?: ScriptBinding
}
