// Movement presets for camera animation

import { MovementType } from '../types/camera'

export interface MovementPreset {
  type: MovementType
  label: string
  labelEn: string
  description: string
  defaultDuration: number  // seconds
}

export const MOVEMENT_PRESETS: MovementPreset[] = [
  {
    type: 'push',
    label: '推进',
    labelEn: 'Push In',
    description: '摄像机向前推进，逐渐接近主体',
    defaultDuration: 3,
  },
  {
    type: 'pull',
    label: '拉出',
    labelEn: 'Pull Out',
    description: '摄像机向后拉远，展示更多环境',
    defaultDuration: 3,
  },
  {
    type: 'pan',
    label: '摇镜',
    labelEn: 'Pan',
    description: '摄像机水平旋转，左右扫视',
    defaultDuration: 2,
  },
  {
    type: 'tilt',
    label: '俯仰',
    labelEn: 'Tilt',
    description: '摄像机垂直旋转，上下扫视',
    defaultDuration: 2,
  },
  {
    type: 'track',
    label: '跟踪',
    labelEn: 'Track',
    description: '摄像机平行移动，跟随主体运动',
    defaultDuration: 4,
  },
  {
    type: 'orbit',
    label: '环绕',
    labelEn: 'Orbit',
    description: '摄像机围绕主体做圆弧运动',
    defaultDuration: 5,
  },
  {
    type: 'crane_up',
    label: '升起',
    labelEn: 'Crane Up',
    description: '摄像机垂直升起，俯瞰全景',
    defaultDuration: 3,
  },
  {
    type: 'crane_down',
    label: '降下',
    labelEn: 'Crane Down',
    description: '摄像机垂直降下，接近地面',
    defaultDuration: 3,
  },
]
