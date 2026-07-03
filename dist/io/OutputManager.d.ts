import { PlannerEventMap, PlannerEvent, EventHandler } from '../types/events';
import { ProjectData } from '../types/project';
export declare class OutputManager {
    private listeners;
    /** Subscribe to an event */
    on<E extends PlannerEvent>(event: E, handler: EventHandler<PlannerEventMap[E]>): () => void;
    /** Emit an event */
    emit<E extends PlannerEvent>(event: E, data: PlannerEventMap[E]): void;
    /** Export current project data */
    exportProject(): ProjectData;
    /** Export cameras only */
    exportCameras(): import('..').Camera[];
    /** Export viewport as PNG (delegates to SceneEngine via callback) */
    private pngExporter;
    setPNGExporter(fn: () => Promise<Blob | null>): void;
    exportStoryboardPNG(): Promise<Blob | null>;
}
