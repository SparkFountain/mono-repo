import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  scene: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Hotel',
      backgroundUrl: 'hotel.jpg',
      objects: [],
    };
  }
}
