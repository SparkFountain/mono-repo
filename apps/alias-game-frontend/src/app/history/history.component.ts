import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  ActiveSession,
  HistoryEvent,
  Response,
} from '@spark-fountain/alias-game';
import { environment } from '../../environments/environment';

@Component({
  selector: 'spark-fountain-alias-game-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  _activeSession: ActiveSession;
  @Input('activeSession')
  set activeSession(session: ActiveSession) {
    this._activeSession = session;
  }

  public historyEvents: HistoryEvent[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.historyEvents = [];

    // setInterval(() => {
    //   this.http
    //     .get(`/api/fetch-history`, {
    //       params: { session: this._activeSession.name },
    //     })
    //     .toPromise()
    //     .then((response: Response<HistoryEvent[]>) => {
    //       this.historyEvents = [];

    //       response.data.forEach((event: HistoryEvent) => {
    //         this.historyEvents.push(event);
    //       });
    //     });
    // }, 1000);
  }
}
