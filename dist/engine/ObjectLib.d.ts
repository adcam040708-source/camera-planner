import { SceneObject, ObjectType } from '../types/scene';
/**
 * ObjectLib — 12 preset scene object types.
 *
 * Each object type has a factory function that creates a Three.js mesh.
 * Objects are placed in the scene and can be moved/rotated/scaled.
 */
import * as THREE from 'three';
export declare class ObjectLib {
    private scene;
    private objects;
    constructor(scene: THREE.Scene);
    /** Add an object to the scene */
    addObject(params: Partial<SceneObject> & {
        type: ObjectType;
    }): SceneObject;
    /** Update an existing object */
    updateObject(id: string, params: Partial<SceneObject>): SceneObject | null;
    /** Tag root + child meshes so RayPicker can resolve objectId on hit */
    private tagObjectId;
    /** Delete an object */
    deleteObject(id: string): boolean;
    /** Get all objects */
    getAllObjects(): SceneObject[];
    /** Get object by ID */
    getObject(id: string): SceneObject | null;
    /** Get mesh for raycasting */
    getMesh(id: string): THREE.Object3D | null;
    /** Get all meshes for raycasting */
    getAllMeshes(): THREE.Object3D[];
    /** Clear all objects */
    clearAll(): void;
    private createMesh;
    private createPerson;
    private createBuilding;
    private createCar;
    private createTree;
    private createChair;
    private applyTransform;
}
