import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session, Response } from '@spark-fountain/alias-game';

import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: HttpClient, private socket: Socket) {}

  // TODO: completely refactor (use websocket broadcasting)
  fetchActiveSession(sessionName: string): Promise<Response<Session>> {
    return this.http
      .get<Response<Session>>(`/api/fetch-session?session=${sessionName}`)
      .toPromise();
  }
}
