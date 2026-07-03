/**
 * usePlannerStore — Zustand state management for the entire planner.
 *
 * Single source of truth for all planner state.
 * Components read/write through this store.
 * I/O managers sync with external data through this store.
 */

import { create } from 'zustand'
import { Camera, MovementConfig } from '../types/camera'
import { SceneConfig, SceneObject, LightingConfig } from '../types/scene'
import { ProjectData, PathPoint, StoryboardConfig, TimelineConfig } from '../types/project'
import { createEmptyProject } from '../types/project'

export type EditorMode = 'select' | 'place' | 'move' | 'rotate'
export type ToolMode = 'camera' | 'object' | 'light' | 'path'
export type SideTab = 'cameras' | 'objects' | 'templates' | 'characters'
export type BottomTab = 'timeline' | 'storyboard' | 'keyframes'

export interface PlannerState {
  // Project
  project: ProjectData

  // Editor state
  mode: EditorMode
  tool: ToolMode
  sideTab: SideTab
  bottomTab: BottomTab
  selectedCameraId: string | null
  selectedObjectId: string | null

  // UI state
  showGrid: boolean
  showAxes: boolean
  showFovCones: boolean

  // --- Camera actions ---
  addCamera: (camera: Camera) => void
  updateCamera: (id: string, params: Partial<Camera>) => void
  deleteCamera: (id: string) => void
  selectCamera: (id: string | null) => void
  setCameraMovement: (id: string, movement: MovementConfig) => void

  // --- Object actions ---
  addObject: (obj: SceneObject) => void
  updateObject: (id: string, params: Partial<SceneObject>) => void
  deleteObject: (id: string) => void
  selectObject: (id: string | null) => void

  // --- Scene actions ---
  setSceneConfig: (config: Partial<SceneConfig>) => void
  setLighting: (config: Partial<LightingConfig>) => void

  // --- Path actions ---
  setPath: (points: PathPoint[]) => void
  addPathPoint: (point: PathPoint) => void
  removePathPoint: (id: string) => void

  // --- Timeline actions ---
  setTimelineTime: (time: number) => void
  setTimelinePlaying: (playing: boolean) => void

  // --- Storyboard actions ---
  setStoryboardGrid: (grid: '3x3' | '5x5') => void
  setStoryboardCell: (index: number, cameraId: string | null) => void

  // --- Editor actions ---
  setMode: (mode: EditorMode) => void
  setTool: (tool: ToolMode) => void
  setSideTab: (tab: SideTab) => void
  setBottomTab: (tab: BottomTab) => void
  toggleGrid: () => void
  toggleAxes: () => void
  toggleFovCones: () => void

  // --- Project actions ---
  loadProject: (data: ProjectData) => void
  getProjectData: () => ProjectData

  // --- Undo/Redo ---
  undo: () => void
  redo: () => void
}

// Simple undo/redo via state snapshots
const historyStack: ProjectData[] = []
const redoStack: ProjectData[] = []
const MAX_HISTORY = 50

export const usePlannerStore = create<PlannerState>((set, get) => ({
  // Initial state
  project: createEmptyProject(),
  mode: 'select',
  tool: 'camera',
  sideTab: 'cameras',
  bottomTab: 'timeline',
  selectedCameraId: null,
  selectedObjectId: null,
  showGrid: true,
  showAxes: true,
  showFovCones: true,

  // --- Camera actions ---
  addCamera: (camera) => set((s) => {
    pushHistory(s.project)
    return {
      project: {
        ...s.project,
        cameras: [...s.project.cameras, camera],
      },
    }
  }),

  updateCamera: (id, params) => set((s) => {
    pushHistory(s.project)
    return {
      project: {
        ...s.project,
        cameras: s.project.cameras.map(c =>
          c.id === id ? { ...c, ...params } : c
        ),
      },
    }
  }),

  deleteCamera: (id) => set((s) => {
    pushHistory(s.project)
    return {
      project: {
        ...s.project,
        cameras: s.project.cameras.filter(c => c.id !== id),
      },
      selectedCameraId: s.selectedCameraId === id ? null : s.selectedCameraId,
    }
  }),

  selectCamera: (id) => set({ selectedCameraId: id, selectedObjectId: null }),

  setCameraMovement: (id, movement) => set((s) => ({
    project: {
      ...s.project,
      cameras: s.project.cameras.map(c =>
        c.id === id ? { ...c, movement } : c
      ),
    },
  })),

  // --- Object actions ---
  addObject: (obj) => set((s) => {
    pushHistory(s.project)
    return {
      project: {
        ...s.project,
        scene: {
          ...s.project.scene,
          objects: [...s.project.scene.objects, obj],
        },
      },
    }
  }),

  updateObject: (id, params) => set((s) => ({
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        objects: s.project.scene.objects.map(o =>
          o.id === id ? { ...o, ...params } : o
        ),
      },
    },
  })),

  deleteObject: (id) => set((s) => ({
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        objects: s.project.scene.objects.filter(o => o.id !== id),
      },
    },
    selectedObjectId: s.selectedObjectId === id ? null : s.selectedObjectId,
  })),

  selectObject: (id) => set({ selectedObjectId: id, selectedCameraId: null }),

  // --- Scene actions ---
  setSceneConfig: (config) => set((s) => ({
    project: {
      ...s.project,
      scene: { ...s.project.scene, ...config },
    },
  })),

  setLighting: (config) => set((s) => ({
    project: {
      ...s.project,
      scene: {
        ...s.project.scene,
        lighting: { ...s.project.scene.lighting, ...config },
      },
    },
  })),

  // --- Path actions ---
  setPath: (points) => set((s) => ({
    project: { ...s.project, path: points },
  })),

  addPathPoint: (point) => set((s) => ({
    project: { ...s.project, path: [...s.project.path, point] },
  })),

  removePathPoint: (id) => set((s) => ({
    project: { ...s.project, path: s.project.path.filter(p => p.id !== id) },
  })),

  // --- Timeline actions ---
  setTimelineTime: (time) => set((s) => ({
    project: {
      ...s.project,
      timeline: { ...s.project.timeline, currentTime: time },
    },
  })),

  setTimelinePlaying: (playing) => set((s) => ({
    project: {
      ...s.project,
      timeline: { ...s.project.timeline, playing },
    },
  })),

  // --- Storyboard actions ---
  setStoryboardGrid: (grid) => set((s) => ({
    project: {
      ...s.project,
      storyboard: { ...s.project.storyboard, grid },
    },
  })),

  setStoryboardCell: (index, cameraId) => set((s) => {
    const cells = [...s.project.storyboard.cells]
    const existing = cells.findIndex(c => c.index === index)
    if (existing >= 0) {
      cells[existing] = { ...cells[existing], cameraId: cameraId ?? undefined }
    } else {
      cells.push({ index, cameraId: cameraId ?? undefined })
    }
    return {
      project: {
        ...s.project,
        storyboard: { ...s.project.storyboard, cells },
      },
    }
  }),

  // --- Editor actions ---
  setMode: (mode) => set({ mode }),
  setTool: (tool) => set({ tool }),
  setSideTab: (sideTab) => set({ sideTab }),
  setBottomTab: (bottomTab) => set({ bottomTab }),
  toggleGrid: () => set((s) => ({ showGrid: !s.showGrid })),
  toggleAxes: () => set((s) => ({ showAxes: !s.showAxes })),
  toggleFovCones: () => set((s) => ({ showFovCones: !s.showFovCones })),

  // --- Project actions ---
  loadProject: (data) => set({
    project: data,
    selectedCameraId: null,
    selectedObjectId: null,
  }),

  getProjectData: () => get().project,

  // --- Undo/Redo ---
  undo: () => {
    if (historyStack.length === 0) return
    const prev = historyStack.pop()!
    // Save the state we're leaving so redo can return to it
    redoStack.push(structuredClone(get().project))
    set({ project: prev })
  },

  redo: () => {
    if (redoStack.length === 0) return
    const next = redoStack.pop()!
    // Save the state we're leaving so undo can return to it (don't clear redoStack)
    historyStack.push(structuredClone(get().project))
    if (historyStack.length > MAX_HISTORY) historyStack.shift()
    set({ project: next })
  },
}))

function pushHistory(project: ProjectData): void {
  historyStack.push(structuredClone(project))
  if (historyStack.length > MAX_HISTORY) historyStack.shift()
  redoStack.length = 0  // clear redo on new action
}
