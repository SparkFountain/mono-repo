import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spark-fountain-church',
  templateUrl: './church.component.html',
  styleUrls: ['./church.component.scss'],
})
export class ChurchComponent implements OnInit {
  words: string[];

  constructor() {}

  ngOnInit(): void {
    this.words = [
      'Betende Person',
      'Bibel',
      'Moschee',
      'Halbmond mit Stern',
      'Auge',
      'Achtelnoten',
      'Kerzenständer',
      'Zauberstab',
      'Baby',
      'Glocke',
    ];
  }
}
