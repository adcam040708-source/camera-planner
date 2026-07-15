import { Actor, ActorKeyframe } from '../types/actor';
import { Position3D, Rotation3D } from '../types/camera';
/**
 * ActorRig — 角色3D可视化 + 运动路径管理
 *
 * 每个角色在3D场景里是一个人形实体（胶囊体+球头）。
 * 角色的运动关键帧显示为路径标记+连线。
 * 选中角色时高亮显示。
 *
 * 功能对标 CameraRig + PathSystem 的合体：
 * - 角色CRUD + 3D实体
 * - 运动关键帧路径可视化
 * - 时间轴播放时的位置插值
 */
import * as THREE from 'three';
export declare class ActorRig {
    private scene;
    private actors;
    private selectedId;
    constructor(scene: THREE.Scene);
    /** 添加角色 */
    addActor(params?: Partial<Actor>): Actor;
    /** 更新角色 */
    updateActor(id: string, params: Partial<Actor>): Actor | null;
    /** 时间轴播放：更新所有角色在指定时间的位置 */
    updatePlayback(time: number): void;
    /** 释放Group内所有Mesh的geometry和material */
    private disposeGroup;
    /** 删除角色 */
    deleteActor(id: string): boolean;
    /** 选中角色 */
    selectActor(id: string | null): void;
    /** 获取角色数据 */
    getActor(id: string): Actor | null;
    /** 获取所有角色 */
    getAllActors(): Actor[];
    /** 获取3D Group（给RayPicker用） */
    getMeshGroup(id: string): THREE.Group | null;
    /** 获取所有Mesh Groups */
    getAllMeshGroups(): THREE.Group[];
    /** 路径线 / 路点标记 / 骨骼锚点 — 取景器渲染时临时隐藏 */
    getHelperObjects(): THREE.Object3D[];
    /** 添加关键帧 */
    addKeyframe(actorId: string, kf: Partial<ActorKeyframe> & {
        position: Position3D;
    }): ActorKeyframe | null;
    /** 删除关键帧 */
    removeKeyframe(actorId: string, keyframeId: string): boolean;
    /** 获取某时间点的插值位置（播放用） */
    sampleAtTime(actorId: string, time: number): {
        position: Position3D;
        rotation: Rotation3D;
        action: string;
    } | null;
    /** 导入角色列表（批量） */
    importActors(actors: Actor[]): void;
    /** 清空 */
    clearAll(): void;
    /** 创建角色3D实体 */
    private createActorMesh;
    /** 刷新路径可视化 */
    private refreshPath;
    /** 清除路径可视化 */
    private clearPath;
    /** 高亮角色 */
    private highlightActor;
    /** 释放资源 */
    dispose(): void;
}
