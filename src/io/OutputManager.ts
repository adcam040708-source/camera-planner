/**
 * OutputManager — Emits events to the Muraguchi host project.
 *
 * This is the "output pipe" — Camera Planner notifies the host
 * when data changes. The host decides what to do (e.g., save to backend).
 */

import { PlannerEventMap, PlannerEvent, EventHandler } from '../types/events'
import { ProjectData } from '../types/project'
import { usePlannerStore } from '../store/usePlannerStore'

export class OutputManager {
  private listeners: Map<string, Set<EventHandler<unknown>>> = new Map()

  /** Subscribe to an event */
  on<E extends PlannerEvent>(event: E, handler: EventHandler<PlannerEventMap[E]>): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    const set = this.listeners.get(event)!
    set.add(handler as EventHandler<unknown>)
    return () => set.delete(handler as EventHandler<unknown>)
  }

  /** Emit an event */
  emit<E extends PlannerEvent>(event: E, data: PlannerEventMap[E]): void {
    const handlers = this.listeners.get(event)
    if (handlers) {
      for (const handler of handlers) {
        (handler as EventHandler<PlannerEventMap[E]>)(data)
      }
    }
  }

  /** Export current project data */
  exportProject(): ProjectData {
    return usePlannerStore.getState().getProjectData()
  }

  /** Export cameras only */
  exportCameras() {
    return usePlannerStore.getState().getProjectData().cameras
  }

  /** Export viewport as PNG (delegates to SceneEngine via callback) */
  private pngExporter: (() => Promise<Blob | null>) | null = null

  setPNGExporter(fn: () => Promise<Blob | null>): void {
    this.pngExporter = fn
  }

  async exportStoryboardPNG(): Promise<Blob | null> {
    return this.pngExporter?.() ?? null
  }
}
