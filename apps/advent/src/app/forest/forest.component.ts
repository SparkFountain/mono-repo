import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-forest',
  templateUrl: './forest.component.html',
  styleUrls: ['./forest.component.scss'],
})
export class ForestComponent implements OnInit {
  scene: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Wald',
      backgroundUrl: 'forest.jpg',
      objects: [],
    };
  }
}
