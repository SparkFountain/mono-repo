import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  scene: Scene;

  constructor() {}

  ngOnInit(): void {
    this.scene = {
      name: 'Willkommen',
      backgroundUrl: 'welcome.jpg',
      decoration: [
        {
          icon: 'fas fa-home fa-2x',
          style: {
            top: 396,
            left: 70,
            transform: 'rotate(-10deg)',
          },
          classes: ['black'],
        },
        {
          icon: 'fas fa-home fa-2x',
          style: {
            top: 392,
            left: 120,
            transform: 'rotate(-1deg) scale(-1,1)',
          },
          classes: ['red-dark'],
        },
        {
          icon: 'fas fa-home fa-2x',
          style: {
            top: 394,
            left: 170,
            transform: 'rotate(4deg)',
          },
          classes: ['green-dark'],
        },
        {
          icon: 'fas fa-cloud fa-3x',
          style: {
            top: 103,
            left: 45,
            opacity: 0.75,
          },
          classes: ['white'],
        },
        {
          icon: 'fas fa-cloud fa-2x',
          style: {
            top: 103,
            left: 205,
            opacity: 0.75,
          },
          classes: ['white'],
        },
        {
          icon: 'fas fa-cloud fa-4x',
          style: {
            top: 103,
            left: 273,
            opacity: 0.75,
          },
          classes: ['white'],
        },
        {
          icon: 'fas fa-sun fa-3x',
          style: {
            top: 103,
            left: 128,
            opacity: 0.5,
          },
          classes: ['red'],
        },
        {
          icon: 'fas fa-car-side',
          style: {
            top: 473,
            left: 28,
          },
          classes: ['black'],
        },
        {
          icon: 'fas fa-truck-monster',
          style: {
            top: 423,
            left: 277,
            transform: 'scale(-1,1) rotate(-8deg)',
          },
          classes: ['black'],
        },
        {
          icon: 'fas fa-hiking',
          style: {
            top: 250,
            left: 10,
          },
          classes: ['black'],
        },
        {
          icon: 'fas fa-horse',
          style: {
            top: 350,
            left: 250,
          },
          classes: ['grey', 'circle-shadow-dark'],
        },
        {
          icon: 'fas fa-horse',
          style: {
            top: 330,
            left: 230,
            transform: 'scale(-1,1)'
          },
          classes: ['grey', 'circle-shadow-dark'],
        },
      ],
    };
  }
}
