import { Component, Input, OnInit } from '@angular/core';
import { CollectableObject } from '../interfaces/collectable-object.interface';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-advent-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements OnInit {
  @Input('scene') scene: Scene;
  words: string[];

  constructor() {}

  ngOnInit(): void {
    this.words = [];
    this.scene.objects.forEach((obj: CollectableObject) => {
      this.words.push(obj.name);
    });
  }

  renderBackgroundUrl(): string {
    return `url('/assets/gfx/scenes/${this.scene.backgroundUrl}') no-repeat`;
  }

  renderStyle(obj: CollectableObject): object {
    return {
      top: `${obj.style.top}px`,
      left: `${obj.style.left}px`,
      transform: obj.style.transform || 'none',
      opacity: obj.style.opacity || 1,
    };
  }

  renderClasses(obj: CollectableObject): string {
    let result = obj.icon;
    obj.classes?.forEach((c: string) => (result += ` ${c}`));
    return result;
  }

  help(): void {
    console.info('[TODO] implement help');
  }
}
