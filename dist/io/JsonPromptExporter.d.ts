import { ProjectData } from '../types/project';
import { JsonPrompt } from '../types/prompt';
export declare class JsonPromptExporter {
    /**
     * 把完整项目数据转成 JSON Prompt
     */
    export(project: ProjectData): JsonPrompt;
    /**
     * 导出为 JSON 字符串（带缩进）
     */
    exportString(project: ProjectData): string;
    /** 场景块：环境+物体 */
    private exportScene;
    /** 相机块：光学参数+运动轨迹 */
    private exportCameras;
    /** 角色块：身份+运动轨迹 */
    private exportActors;
    /** 时间线块 */
    private exportTimeline;
}
/** 单例 */
export declare const jsonPromptExporter: JsonPromptExporter;
