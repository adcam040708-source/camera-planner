import { default as React } from 'react';
import { SceneEngine } from '../engine/SceneEngine';
import { CameraRig } from '../engine/CameraRig';
import { ActorRig } from '../engine/ActorRig';
import { PathSystem } from '../engine/PathSystem';
interface ViewfinderOverlayProps {
    scene: SceneEngine;
    cameraRig: CameraRig;
    actorRig: ActorRig;
    pathSystem: PathSystem;
}
export declare const ViewfinderOverlay: React.FC<ViewfinderOverlayProps>;
export {};
