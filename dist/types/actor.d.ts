import { Position3D, Rotation3D } from './camera';
/** 角色类型 */
export type ActorRole = 'principal' | 'supporting' | 'extra';
/** 角色动作 */
export type ActorAction = 'stand' | 'walk' | 'run' | 'sit' | 'turn' | 'gesture' | 'leave';
/** 角色运动关键帧 */
export interface ActorKeyframe {
    id: string;
    time: number;
    position: Position3D;
    rotation: Rotation3D;
    action: ActorAction;
}
/** 角色 */
export interface Actor {
    id: string;
    name: string;
    role: ActorRole;
    position: Position3D;
    rotation: Rotation3D;
    height: number;
    color: number;
    keyframes: ActorKeyframe[];
}
