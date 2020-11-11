import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spark-fountain-cableway',
  templateUrl: './cableway.component.html',
  styleUrls: ['./cableway.component.scss'],
})
export class CablewayComponent implements OnInit {
  words: string[];

  constructor() {}

  ngOnInit(): void {
    this.words = [
      'Skifahrer',
      'Geschenk',
      'Smiley',
      'Bauer',
      'Tanne',
      'Schneemann',
      'Stechpalme',
    ];
  }
}
