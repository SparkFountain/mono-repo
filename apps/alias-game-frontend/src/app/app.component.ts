import { Component, OnInit } from '@angular/core';
import { TickerMessage } from '@spark-fountain/alias-game';
import { Observable } from 'rxjs';

import { SessionService } from './services/session.service';

@Component({
  selector: 'spark-fountain-alias-game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(/* private sessionService: SessionService */) {
    this.tickerMessages = [];
  }

  views: Observable<number>;
  public tickerMessages: TickerMessage[];

  ngOnInit(): void {
    // this.sessionService
    //   .receiveUpdates()
    //   .subscribe((tickerMessage: TickerMessage) => {
    //     console.log('Receiving update:', tickerMessage);
    //     this.tickerMessages.push(tickerMessage);
    //   });

    // this.views = this.sessionService.getViews();
  }
}
