import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spark-fountain-advent-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  @Input('words') words: string[];
  @Output('changedWord') changedWord: EventEmitter<number>;
  wordOffset: number;

  constructor() {
    this.changedWord = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.wordOffset = 0;
  }

  moveWords(direction: 'left' | 'right'): void {
    if (direction === 'left' && this.wordOffset > 0) {
      this.wordOffset--;
      this.changedWord.emit(-1);
    } else if (
      direction === 'right' &&
      this.wordOffset < this.words.length - 1
    ) {
      this.wordOffset++;
      this.changedWord.emit(1);
    }
  }
}
