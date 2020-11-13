import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.scss'],
})
export class TheaterComponent implements OnInit {
  scene: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Theater',
      backgroundUrl: 'theater.jpg',
      objects: [
        {
          name: 'Umkleidekabine',
          icon: 'fas fa-person-booth fa-4x',
          style: {
            top: 360,
            left: 228,
            opacity: 0.7,
          },
          classes: ['red-dark'],
        },
        {
          name: 'Uhr',
          icon: 'far fa-clock fa-2x',
          style: {
            top: 73,
            left: 166,
          },
          classes: ['green', 'circle-shadow-dark'],
        },
        {
          name: 'Schallplatte',
          icon: 'fas fa-compact-disc fa-2x',
          style: {
            top: 307,
            left: 5,
          },
          classes: ['black'],
        },
        {
          name: 'Abzeichen',
          icon: 'fas fa-award fa-2x',
          style: {
            top: 334,
            left: 117,
          },
          classes: ['red', 'circle-shadow-dark'],
        },
        {
          name: 'Stuhl',
          icon: 'fas fa-chair fa-3x',
          style: {
            top: 365,
            left: 303,
            opacity: 0.5,
          },
          classes: ['grey'],
        },
        {
          name: 'Trommel',
          icon: 'fas fa-drum fa-6x',
          style: {
            top: 135,
            left: 128,
            opacity: 0.75,
          },
          classes: ['red-dark'],
        },
        {
          name: 'Detektiv',
          icon: 'fas fa-user-secret fa-2x',
          style: {
            top: 212,
            left: 40,
            transform: 'rotate(27deg)',
          },
          classes: ['green', 'circle-shadow-dark'],
        },
        {
          name: 'Feuerlöscher',
          icon: 'fas fa-fire-extinguisher fa-2x',
          style: {
            top: 222,
            left: 264,
            transform: 'scale(-1,1)',
            opacity: 0.3,
          },
          classes: ['red'],
        },
        {
          name: 'Diamant',
          icon: 'fas fa-gem',
          style: {
            top: 184,
            left: 270,
          },
          classes: ['circle-shadow-dark'],
        },
        {
          name: 'Regenschirm',
          icon: 'fas fa-umbrella fa-4x',
          style: {
            top: 47,
            left: 256,
            transform: 'rotate(10deg)',
            opacity: 0.5,
          },
          classes: ['black', 'circle-shadow-light'],
        },
      ],
    };
  }
}
