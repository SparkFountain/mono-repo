import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spark-fountain-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
  words: string[];

  constructor() {}

  ngOnInit(): void {
    this.words = [
      'Cocktail',
      'Bierglas',
      'Weinflasche',
      'Whiskey',
      'Zitrone',
      'Würfel',
      'Zigarette',
      'Hamburger',
      'Fußball',
      'Spielkarte',
    ];
  }
}
