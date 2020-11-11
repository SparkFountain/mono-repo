import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spark-fountain-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.scss'],
})
export class PoolComponent implements OnInit {
  words: string[];

  constructor() {}

  ngOnInit(): void {
    this.words = [
      'Duschkopf',
      'Wassertropfen',
      'Leiter',
      'Schiff',
      'Cowboyhut',
      'Wasserball',
      'Fisch',
      'Regenwolke',
      'Anker',
      'Rettungsring'
    ];
  }
}
