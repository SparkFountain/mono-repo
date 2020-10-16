import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spark-fountain-alias-game-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss'],
})
export class WinnerComponent implements OnInit {
  _winnerTeam: string;
  @Input()
  set winnerTeam(value: string) {
    this._winnerTeam = value;
  }
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  resetSession(): void {
    this.reset.emit();
  }
}
