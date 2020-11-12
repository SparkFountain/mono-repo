import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-igloo',
  templateUrl: './igloo.component.html',
  styleUrls: ['./igloo.component.scss'],
})
export class IglooComponent implements OnInit {
  scene: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Siedlung',
      backgroundUrl: 'igloo.jpg',
      objects: [],
    };
  }
}
