// Event type definitions for I/O communication

import { Camera } from './camera'
import { SceneConfig } from './scene'
import { ProjectData, StoryboardConfig } from './project'

export type PlannerEventMap = {
  'camera:change': Camera
  'camera:select': string           // camera id
  'camera:add': Camera
  'camera:delete': string           // camera id
  'scene:change': SceneConfig
  'project:export': ProjectData
  'storyboard:change': StoryboardConfig
  'timeline:change': number         // current time
  'object:add': string              // object id
  'object:delete': string           // object id
  'movement:play': { cameraId: string; type: string }
  'undo': void
  'redo': void
}

export type PlannerEvent = keyof PlannerEventMap
export type EventHandler<T> = (data: T) => void
