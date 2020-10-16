import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActiveSession, Response } from '@spark-fountain/alias-game';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: HttpClient) {}

  // TODO: completely refactor (use websocket broadcasting)
  fetchActiveSession(sessionName: string): Promise<Response<ActiveSession>> {
    return this.http
      .get<Response<ActiveSession>>(
        `/api/fetch-session?session=${sessionName}`
      )
      .toPromise();
  }
}
