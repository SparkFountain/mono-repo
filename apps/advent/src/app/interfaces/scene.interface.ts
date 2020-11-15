import { CollectableObject } from './collectable-object.interface';
import { Decoration } from '../interfaces/decoration.interface';

export interface Scene {
  name: string;
  backgroundUrl: string;
  objects?: CollectableObject[];
  decoration?: Decoration[];
}
