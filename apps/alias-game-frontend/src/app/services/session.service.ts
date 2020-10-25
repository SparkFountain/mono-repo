import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActiveSession,
  Response,
  TickerMessage,
} from '@spark-fountain/alias-game';
import { environment } from '../../environments/environment';

import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: HttpClient, private socket: Socket) {}

  // receiveUpdates(): Observable<TickerMessage> {
  //   this.socket.emit('liveticker');
  //   return this.socket.fromEvent('liveticker');
  // }

  // getViews(): Observable<number> {
  //   return this.socket.fromEvent('views');
  // }

  // TODO: completely refactor (use websocket broadcasting)
  fetchActiveSession(sessionName: string): Promise<Response<ActiveSession>> {
    return this.http
      .get<Response<ActiveSession>>(`/api/fetch-session?session=${sessionName}`)
      .toPromise();
  }
}
