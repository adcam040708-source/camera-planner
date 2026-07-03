/**
 * MockAdapter — Simulates Muraguchi backend for standalone development.
 *
 * When Camera Planner is used without the Muraguchi backend (e.g., during
 * development or in the demo page), MockAdapter provides:
 * - In-memory project storage
 * - Simulated API responses
 * - Auto-save on changes
 *
 * Usage:
 *   import { MockAdapter } from './io/MockAdapter'
 *   const mock = new MockAdapter()
 *   mock.init(inputManager)  // wire up to InputManager
 */

import { InputManager } from './InputManager'
import { OutputManager } from './OutputManager'
import { ProjectData, createEmptyProject } from '../types/project'
import { Camera } from '../types/camera'

export class MockAdapter {
  private projects: Map<string, ProjectData> = new Map()
  private autoSaveTimer: ReturnType<typeof setTimeout> | null = null
  private STORAGE_KEY = 'camera-planner-mock-projects'

  constructor() {
    this.loadFromStorage()
  }

  /** Wire up to InputManager and OutputManager for bidirectional sync */
  init(input: InputManager, output: OutputManager): void {
    // When planner emits changes, auto-save
    output.on('camera:change', (camera) => {
      this.scheduleAutoSave()
    })
    output.on('camera:add', (camera) => {
      this.scheduleAutoSave()
    })
    output.on('camera:delete', () => {
      this.scheduleAutoSave()
    })
    output.on('scene:change', () => {
      this.scheduleAutoSave()
    })
  }

  /** Load a project (or create empty) and push to InputManager */
  loadProject(projectId: string, input: InputManager): ProjectData {
    let project = this.projects.get(projectId)
    if (!project) {
      project = createEmptyProject()
      this.projects.set(projectId, project)
    }
    input.loadProject(project)
    return project
  }

  /** Save current planner state */
  saveProject(projectId: string, output: OutputManager): void {
    const data = output.exportProject()
    this.projects.set(projectId, data)
    this.persistToStorage()
  }

  /** Get a project by ID */
  getProject(projectId: string): ProjectData | undefined {
    return this.projects.get(projectId)
  }

  /** List all saved project IDs */
  listProjects(): string[] {
    return Array.from(this.projects.keys())
  }

  /** Delete a project */
  deleteProject(projectId: string): boolean {
    const existed = this.projects.delete(projectId)
    if (existed) this.persistToStorage()
    return existed
  }

  /** Simulate API: save camera */
  saveCamera(projectId: string, camera: Camera): void {
    const project = this.projects.get(projectId)
    if (!project) return
    const idx = project.cameras.findIndex(c => c.id === camera.id)
    if (idx >= 0) {
      project.cameras[idx] = camera
    } else {
      project.cameras.push(camera)
    }
    this.scheduleAutoSave()
  }

  /** Simulate API: delete camera */
  deleteCamera(projectId: string, cameraId: string): void {
    const project = this.projects.get(projectId)
    if (!project) return
    project.cameras = project.cameras.filter(c => c.id !== cameraId)
    this.scheduleAutoSave()
  }

  // --- Private ---

  private scheduleAutoSave(): void {
    if (this.autoSaveTimer) clearTimeout(this.autoSaveTimer)
    this.autoSaveTimer = setTimeout(() => {
      this.persistToStorage()
    }, 1000) // debounce 1s
  }

  private persistToStorage(): void {
    try {
      const data: Record<string, ProjectData> = {}
      for (const [id, project] of this.projects) {
        data[id] = project
      }
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data))
    } catch {
      // localStorage may not be available (e.g., in npm package context)
    }
  }

  private loadFromStorage(): void {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY)
      if (raw) {
        const data = JSON.parse(raw) as Record<string, ProjectData>
        for (const [id, project] of Object.entries(data)) {
          this.projects.set(id, project)
        }
      }
    } catch {
      // ignore
    }
  }
}
