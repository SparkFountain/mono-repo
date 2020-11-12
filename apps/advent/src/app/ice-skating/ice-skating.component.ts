import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-ice-skating',
  templateUrl: './ice-skating.component.html',
  styleUrls: ['./ice-skating.component.scss'],
})
export class IceSkatingComponent implements OnInit {
  scene: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Eislaufen',
      backgroundUrl: 'ice-skating.jpg',
      objects: [],
    };
  }
}
