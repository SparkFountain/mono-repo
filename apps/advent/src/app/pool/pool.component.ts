import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-advent-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss'],
})
export class PoolComponent implements OnInit {
  scene: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Schwimmbad',
      backgroundUrl: 'pool.jpg',
      objects: [
        {
          name: 'Duschkopf',
          icon: 'fas fa-shower fa-3x',
          style: {
            top: 180,
            left: 82,
          },
          classes: ['circle-shadow-light'],
        },
        {
          name: 'Wassertropfen',
          icon: 'fas fa-tint fa-1x',
          style: {
            top: 196,
            left: 262,
          },
          classes: ['green'],
        },
        {
          name: 'Leiter',
          icon: 'fas fa-swimming-pool fa-3x',
          style: {
            top: 300,
            left: 262,
          },
          classes: ['grey'],
        },
        {
          name: 'Schiff',
          icon: 'fas fa-ship fa-2x',
          style: {
            top: 400,
            left: 262,
            transform: 'rotate(12deg)',
            opacity: 0.8,
          },
          classes: ['red-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Cowboyhut',
          icon: 'fas fa-hat-cowboy',
          style: {
            top: 107,
            left: 180,
          },
          classes: ['red'],
        },
        {
          name: 'Wasserball',
          icon: 'fas fa-volleyball-ball fa-2x',
          style: {
            top: 299,
            left: 88,
          },
          classes: ['green-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Fisch',
          icon: 'fas fa-fish fa-1x',
          style: {
            top: 432,
            left: 88,
            opacity: 0.4,
          },
          classes: ['black'],
        },
        {
          name: 'Regenwolke',
          icon: 'fas fa-cloud-showers-heavy fa-2x',
          style: {
            top: 10,
            left: 188,
          },
          classes: ['grey', 'circle-shadow-light'],
        },
        {
          name: 'Anker',
          icon: 'fas fa-anchor fa-1x',
          style: {
            top: 340,
            left: 118,
          },
          classes: ['red'],
        },
        {
          name: 'Rettungsring',
          icon: 'fas fa-life-ring fa-3x',
          style: {
            top: 40,
            left: 18,
            opacity: 0.2,
            transform: 'rotate(23deg)',
          },
          classes: ['red'],
        },
      ],
    };
  }
}
