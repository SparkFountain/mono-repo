import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  scene: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: '404',
      backgroundUrl: '404.jpg',
      decoration: [
        {
          icon: 'far fa-snowflake',
          style: {
            top: 0,
            left: 0,
          },
          classes: ['red'],
        },
      ],
    };
  }
}
