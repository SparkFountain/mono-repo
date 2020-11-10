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

  @ViewChild('arrowLeft') arrowLeft: any;
  @ViewChild('arrowRight') arrowRight: any;

  // TODO: implement or remove
  // @HostListener('document:mousedown', ['$event']) onMouseDownHandler(
  //   event: MouseEvent
  // ) {
  //   console.log(event);
  // }

  constructor() {}

  ngOnInit(): void {
    this.wordOffset = 0;
  }

  moveWords(direction: 'left' | 'right'): void {
    console.info('MOVE WORDS', direction);

    if (direction === 'left') {
      this.wordOffset--;
    } else if (direction === 'right') {
      this.wordOffset++;
    }
  }
}
