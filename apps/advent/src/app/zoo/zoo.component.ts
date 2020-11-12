import { Component, OnInit } from '@angular/core';
import { RouterState } from '@angular/router';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.scss'],
})
export class ZooComponent implements OnInit {
  scene: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Zoo',
      backgroundUrl: 'zoo.jpg',
      objects: [
        {
          name: 'Flusspferd',
          icon: 'fas fa-hippo fa-2x',
          style: {
            top: 400,
            left: 300,
            transform: 'scale(-1,1)',
          },
          classes: ['red-dark'],
        },
        {
          name: 'Krähe',
          icon: 'fas fa-crow',
          style: {
            top: 80,
            left: 250,
            transform: 'rotate(30deg)',
          },
          classes: ['green'],
        },
        {
          name: 'Hund',
          icon: 'fas fa-dog',
          style: {
            top: 380,
            left: 164,
            transform: 'rotate(-15deg)',
          },
          classes: ['black'],
        },
        {
          name: 'Spinne',
          icon: 'fas fa-spider fa-5x',
          style: {
            top: 170,
            left: 120,
            opacity: 0.5,
            transform: 'rotate(90deg)',
          },
        },
        {
          name: 'Feder',
          icon: 'fas fa-feather-alt fa-2x',
          style: {
            top: 55,
            left: 182,
            transform: 'scale(-1,1) rotate(70deg)',
          },
        },
        {
          name: 'Frosch',
          icon: 'fas fa-frog fa-2x',
          style: {
            top: 410,
            left: 20,
          },
          classes: ['red', 'circle-shadow-dark'],
        },
        {
          name: 'Katze',
          icon: 'fas fa-cat fa-3x',
          style: {
            top: 5,
            left: 70,
            opacity: 0.5,
          },
          classes: ['grey', 'circle-shadow-light'],
        },
        {
          name: 'Kiwi-Vogel',
          icon: 'fas fa-kiwi-bird fa-2x',
          style: {
            top: 227,
            left: 323,
            transform: 'scale(-1,1) rotate(-25deg)',
            opacity: 0.4,
          },
          classes: ['green-dark', 'circle-shadow-light'],
        },
        {
          name: 'Otter',
          icon: 'fas fa-otter fa-3x',
          style: {
            top: 100,
            left: 100,
            transform: 'rotate(5deg)',
          },
          classes: ['black'],
        },
        {
          name: 'Karotte',
          icon: 'fas fa-carrot fa-4x',
          style: {
            top: 107,
            left: 282,
            transform: 'rotate(160deg)',
          },
          classes: ['red-dark', 'circle-shadow-light'],
        },
      ],
    };
  }
}
