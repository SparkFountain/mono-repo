import { CollectableObject } from './collectable-object.interface';

export interface Scene {
  name: string;
  backgroundUrl: string;
  objects: CollectableObject[]
}
