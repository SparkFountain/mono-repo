import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'spark-fountain-advent-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  @Input('words') words: string[];
  wordOffset: number;

  constructor() {}

  ngOnInit(): void {
    this.wordOffset = 0;
  }

  moveWords(direction: 'left' | 'right'): void {
    console.info('MOVE WORDS', direction);

    if (direction === 'left' && this.wordOffset > 0) {
      this.wordOffset--;
    } else if (direction === 'right' && (this.wordOffset < this.words.length-1)) {
      this.wordOffset++;
    }
  }
}
