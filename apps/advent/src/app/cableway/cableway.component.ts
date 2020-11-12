import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-cableway',
  templateUrl: './cableway.component.html',
  styleUrls: ['./cableway.component.scss'],
})
export class CablewayComponent implements OnInit {
  scene: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Seilbahn',
      backgroundUrl: 'cableway.jpg',
      objects: [
        {
          name: 'Skifahrer',
          icon: 'fas fa-skiing fa-2x',
          style: {
            top: 300,
            left: 250,
            opacity: 0.3,
            transform: 'rotate(45deg)',
          },
          classes: ['black'],
        },
        {
          name: 'Geschenk',
          icon: 'fas fa-gift fa-2x',
          style: {
            top: 420,
            left: 250,
            opacity: 0.75,
          },
          classes: ['red', 'circle-shadow-dark'],
        },
        {
          name: 'Smiley',
          icon: 'fas fa-grin-beam fa-4x',
          style: {
            top: 3,
            left: 170,
            opacity: 0.2,
          },
          classes: ['grey'],
        },
        {
          name: 'Bauer',
          icon: 'fas fa-chess-pawn fa-2x',
          style: {
            top: 190,
            left: 120,
            transform: 'rotate(37deg)',
          },
          classes: ['green-dark'],
        },
        {
          name: 'Tanne',
          icon: 'fas fa-tree fa-2x',
          style: {
            top: 350,
            left: 320,
            opacity: 0.5,
          },
          classes: ['green', 'circle-shadow-dark'],
        },
        {
          name: 'Schneemann',
          icon: 'fas fa-snowman fa-3x',
          style: {
            top: 407,
            left: 127,
            opacity: 0.15,
            transform: 'rotate(-5deg)',
          },
          classes: ['circle-shadow-light'],
        },
        {
          name: 'Stechpalmenzweig',
          icon: 'fas fa-holly-berry fa-4x',
          style: {
            top: 267,
            left: 29,
            opacity: 0.8,
            transform: 'rotate(97deg)',
          },
          classes: ['red-dark'],
        },
        {
          name: 'Blatt',
          icon: 'fas fa-leaf fa-3x leaf01',
          style: {
            top: 20,
            left: 290,
            opacity: 0.5,
            transform: 'rotate(140deg)',
          },
          classes: ['green', 'circle-shadow-light'],
        },
        {
          name: 'Schneepflug',
          icon: 'fas fa-snowplow fa-1x',
          style: {
            top: 160,
            left: 320,
            opacity: 0.7,
            transform: 'scale(-1, 1)',
          },
          classes: ['black'],
        },
        {
          name: 'Handschuh',
          icon: 'fas fa-mitten fa-5x',
          style: {
            top: 290,
            left: 145,
            opacity: 0.25,
            transform: 'rotate(170deg)',
          },
          classes: ['black'],
        },
      ],
    };
  }
}
