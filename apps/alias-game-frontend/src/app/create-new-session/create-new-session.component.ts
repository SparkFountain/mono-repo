import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActiveSession, Session, Theme } from '@spark-fountain/alias-game';
import { environment } from '../../environments/environment';

import { Response } from '@spark-fountain/alias-game';
import { Router } from '@angular/router';

@Component({
  selector: 'spark-fountain-alias-game-create-new-session',
  templateUrl: './create-new-session.component.html',
  styleUrls: ['./create-new-session.component.scss'],
})
export class CreateNewSessionComponent implements OnInit {
  public session: Session;

  public horizontal: number;
  public vertical: number;

  public boardSizes: string[];
  public selectedBoardSize: string;

  public themes: Theme[];
  public selectedTheme: string;

  public participant: string;

  public activeSession: ActiveSession;
  public iAmActivePlayer: boolean;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.horizontal = 5;
    this.vertical = 5;

    this.boardSizes = [
      '3 x 3',
      '4 x 3',
      '4 x 4',
      '5 x 4',
      '5 x 5',
      '6 x 5',
      '6 x 6',
    ];
    this.selectedBoardSize = this.boardSizes[4];

    // TODO: allow multiple themes!
    this.themes = [
      {
        name: 'Gemischte Begriffe',
        file: 'mixed',
      },
      {
        name: 'Ü 18',
        file: 'over-18',
      },
      {
        name: 'Party',
        file: 'party',
      },
      {
        name: 'Jazzchor',
        file: 'jazzchor',
      },
      {
        name: 'Corona',
        file: 'corona',
      },
    ];
    this.selectedTheme = this.themes[0].name;

    this.iAmActivePlayer = false;

    this.session = {
      creator: 'Mr(s). Anonymous',
      name: 'Friday Fun',
      horizontal: 5,
      vertical: 5,
      theme: 'mixed',
      teamOneName: 'A',
      teamOneColor: '#c22b0c',
      teamTwoName: 'B',
      teamTwoColor: '#0b6bca',
    };
  }

  createSession(): void {
    this.session = {
      creator: this.session.creator,
      name: this.session.name,
      horizontal: Number(this.selectedBoardSize.substr(0, 1)),
      vertical: Number(this.selectedBoardSize.substr(4, 1)),
      theme: this.themes.find(
        (theme: Theme) => theme.name === this.selectedTheme
      ).file,
      teamOneName: this.session.teamOneName,
      teamOneColor: this.session.teamOneColor,
      teamTwoName: this.session.teamTwoName,
      teamTwoColor: this.session.teamTwoColor,
    };

    this.participant = this.session.creator;

    const body = new URLSearchParams();
    body.set('creator', this.session.creator);
    body.set('name', this.session.name);
    body.set('horizontal', this.selectedBoardSize.substr(0, 1));
    body.set('vertical', this.selectedBoardSize.substr(4, 1));
    body.set(
      'theme',
      this.themes.find((theme: Theme) => theme.name === this.selectedTheme).file
    );
    body.set('teamOneName', this.session.teamOneName);
    body.set('teamOneColor', this.session.teamOneColor);
    body.set('teamTwoName', this.session.teamTwoName);
    body.set('teamTwoColor', this.session.teamTwoColor);

    this.http
      .post(`/api/create-session`, body.toString(), environment.formHeader)
      .toPromise()
      .then((response: Response<ActiveSession>) => {
        this.activeSession = response.data;
        console.info('Active Session:', this.activeSession);

        this.router.navigateByUrl('/spielen'); // TODO: navigate to correct game (use ID or session name as URL parameter)
      })
      .catch((error: any) => {
        console.error('An error occurred:', error);
      });
  }
}
