import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  Session,
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
  _activeSession: Session;
  @Input('activeSession')
  set activeSession(session: Session) {
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
