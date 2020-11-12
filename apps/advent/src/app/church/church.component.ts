import { Component, OnInit } from '@angular/core';
import { Scene } from '../interfaces/scene.interface';

@Component({
  selector: 'spark-fountain-church',
  templateUrl: './church.component.html',
  styleUrls: ['./church.component.scss'],
})
export class ChurchComponent implements OnInit {
  scene: Scene;
  words: string[];

  constructor() {}

  ngOnInit(): void {
    this.words = [];

    this.scene = {
      name: 'Kirche',
      backgroundUrl: 'church.jpg',
      objects: [
        {
          name: 'Betende Person',
          icon: 'fas fa-pray fa-2x',
          style: {
            top: 410,
            left: 120,
          },
          classes: ['red-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Bibel',
          icon: 'fas fa-bible fa-1x',
          style: {
            top: 157,
            left: 185,
          },
          classes: ['white', 'circle-shadow-dark'],
        },
        {
          name: 'Moschee',
          icon: 'fas fa-mosque fa-3x',
          style: {
            top: 339,
            left: 177,
            opacity: 0.8,
          },
          classes: ['grey', 'circle-shadow-dark'],
        },
        {
          name: 'Halbmond mit Stern',
          icon: 'fas fa-star-and-crescent fa-2x',
          style: {
            top: 350,
            left: 22,
            opacity: 0.5,
          },
          classes: ['green-dark', 'circle-shadow-dark'],
        },
        {
          name: 'Auge',
          icon: 'far fa-eye fa-1x',
          style: {
            top: 17,
            left: 206,
          },
          classes: ['green', 'circle-shadow-dark'],
        },
        {
          name: 'Achtelnoten',
          icon: 'fab fa-itunes-note fa-1x',
          style: {
            top: 220,
            left: 239,
          },
          classes: ['red', 'circle-shadow-dark'],
        },
        {
          name: 'Kerzenständer',
          icon: 'fas fa-menorah fa-2x',
          style: {
            top: 262,
            left: 51,
            opacity: 0.65,
          },
          classes: ['grey'],
        },
        {
          name: 'Zauberstab',
          icon: 'fas fa-magic fa-2x',
          style: {
            top: 215,
            left: 282,
            opacity: 0.5,
            transform: 'rotate(-35deg)',
          },
          classes: ['grey'],
        },
        {
          name: 'Baby',
          icon: 'fas fa-baby fa-3x',
          style: {
            top: 227,
            left: 200,
            opacity: 0.85,
            transform: 'rotate(80deg)',
          },
          classes: ['black', 'circle-shadow-light'],
        },
        {
          name: 'Glocke',
          icon: 'fas fa-bell fa-1x',
          style: {
            top: 105,
            left: 28,
          },
          classes: ['green-dark'],
        },
      ],
    };
  }
}
