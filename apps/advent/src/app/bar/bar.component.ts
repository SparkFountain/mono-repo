import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  words: string[];
  scene: Scene;

  constructor() {}

  ngOnInit(): void {
    this.words = [''];

    this.scene = {
      name: 'Bar',
      backgroundUrl: 'bar.jpg',
      objects: [
        {
          name: 'Cocktail',
          icon: 'fas fa-cocktail fa-5x',
          style: {
            top: 300,
            left: 40,
            opacity: 0.5,
          },
          classes: ['green-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Bierglas',
          icon: 'fas fa-beer fa-2x',
          style: {
            top: 210,
            left: 197,
            opacity: 0.66,
          },
          classes: ['grey'],
        },
        {
          name: 'Weinflasche',
          icon: 'fas fa-wine-bottle fa-3x',
          style: {
            top: 40,
            left: 236,
            transform: 'rotate(-40deg)',
          },
          classes: ['red-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Whiskey',
          icon: 'fas fa-glass-whiskey fa-2x',
          style: {
            top: 404,
            left: 192,
            opacity: 0.5,
          },
          classes: ['black', 'circle-shadow-light'],
        },
        {
          name: 'Zitrone',
          icon: 'fas fa-lemon fa-1x',
          style: {
            top: 17,
            left: 257,
            opacity: 0.8,
            transform: 'rotate(70deg)',
          },
          classes: ['white'],
        },
        {
          name: 'Würfel',
          icon: 'fas fa-dice-four fa-2x',
          style: {
            top: 370,
            left: 300,
            transform: 'rotate(16deg)',
          },
          classes: ['white', 'circle-shadow-dark'],
        },
        {
          name: 'Zigarette',
          icon: 'fas fa-smoking fa-1x',
          style: {
            top: 135,
            left: 120,
            transform: 'rotate(6deg)',
          },
          classes: ['black', 'circle-shadow-light'],
        },
        {
          name: 'Hamburger',
          icon: 'fas fa-hamburger fa-6x',
          style: {
            top: 44,
            left: 80,
            opacity: 0.1,
          },
          classes: ['white'],
        },
        {
          name: 'Fußball',
          icon: 'fas fa-futbol fa-1x',
          style: {
            top: 282,
            left: 198,
            opacity: 0.91,
          },
          classes: ['black'],
        },
        {
          name: 'Spielkarte',
          icon: 'fas fa-money-bill fa-2x',
          style: {
            top: 338,
            left: 208,
            opacity: 0.5,
            transform: 'rotate(103deg)',
          },
          classes: ['red', 'circle-shadow-dark'],
        },
      ],
    };
  }
}
