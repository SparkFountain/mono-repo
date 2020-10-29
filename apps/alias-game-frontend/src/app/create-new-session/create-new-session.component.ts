import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Session, Theme } from '@spark-fountain/alias-game';
import { environment } from '../../environments/environment';

import { Response } from '@spark-fountain/alias-game';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'spark-fountain-alias-game-create-new-session',
  templateUrl: './create-new-session.component.html',
  styleUrls: ['./create-new-session.component.scss'],
})
export class CreateNewSessionComponent implements OnInit {
  public creator: FormControl;
  public sessionName: FormControl;

  public horizontal: number;
  public vertical: number;

  public boardSizes: string[];
  public selectedBoardSize: string;

  public themes: Theme[];
  public selectedThemes: FormControl;

  public teams: { name: FormControl; color: AbstractControl }[];

  public participant: string;

  public activeSession: Session;
  public iAmActivePlayer: boolean;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.creator = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]);

    this.sessionName = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]);

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
    this.selectedThemes = new FormControl([], [Validators.required]);

    this.teams = [
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16),
        ]),
        color: new FormControl('', [
          Validators.required,
          Validators.pattern('#[0-9a-f]{6}'),
        ]),
      },
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16),
        ]),
        color: new FormControl('', [Validators.required]),
      },
    ];

    this.iAmActivePlayer = false;

    // this.session = {
    //   creator: new FormControl('', [Validators.required, Validators.email]);,
    //   name: '',
    //   horizontal: 5,
    //   vertical: 5,
    //   themes: this.themes,
    //   teams: [
    //     {
    //       name: '',
    //       active: false,
    //       color: '#c22b0c',
    //       players: [],
    //       remainingCards: -1,
    //     },
    //     {
    //       name: '',
    //       active: false,
    //       color: '#0b6bca',
    //       players: [],
    //       remainingCards: -1,
    //     },
    //   ],
    //   cards: [],
    //   started: false,
    //   description: {
    //     term: '',
    //     amount: -1,
    //     accepted: false,
    //     denied: false,
    //   },
    // };
  }

  getErrorMessage(field: string): string {
    switch (field) {
      case 'creator':
        if (this.creator.hasError('required')) {
          return 'Bitte gib deinen Namen ein';
        } else if (this.creator.hasError('minlength')) {
          return 'Gib bitte mindestens drei Zeichen ein';
        } else if (this.creator.hasError('maxlength')) {
          return 'Bitte beschränke dich auf 16 Zeichen';
        }
      case 'sessionName':
        if (this.sessionName.hasError('required')) {
          return 'Bitte gib einen Session-Namen ein';
        } else if (this.sessionName.hasError('minlength')) {
          return 'Gib bitte mindestens drei Zeichen ein';
        } else if (this.sessionName.hasError('maxlength')) {
          return 'Bitte beschränke dich auf 16 Zeichen';
        }
      case 'selectedThemes':
        return 'Bitte wähle mindestens ein Thema aus';
      case 'team1Name':
        if (this.teams[0].name.hasError('required')) {
          return 'Bitte gib einen Team-Namen ein';
        } else if (this.teams[0].name.hasError('minlength')) {
          return 'Gib bitte mindestens drei Zeichen ein';
        } else if (this.teams[0].name.hasError('maxlength')) {
          return 'Bitte beschränke dich auf 16 Zeichen';
        }
      case 'team1Color':
        if (this.teams[0].color.hasError('pattern')) {
          return 'Ungültiger Farb-Code';
        } else if (this.teams[0].color.hasError('required')) {
          return 'Bitte klicke auf das rechte Icon oder tippe einen Farbcode ein';
        }
      case 'team2Name':
        if (this.teams[1].name.hasError('required')) {
          return 'Bitte gib einen Team-Namen ein';
        } else if (this.teams[1].name.hasError('minlength')) {
          return 'Gib bitte mindestens drei Zeichen ein';
        } else if (this.teams[1].name.hasError('maxlength')) {
          return 'Bitte beschränke dich auf 16 Zeichen';
        }
      case 'team1Color':
        if (this.teams[1].color.hasError('pattern')) {
          return 'Ungültiger Farb-Code';
        } else if (this.teams[1].color.hasError('required')) {
          return 'Bitte klicke auf das rechte Icon oder tippe einen Farbcode ein';
        }
    }
    return 'Unbekannter Fehler';
  }

  createSession(): void {
    // this.session = {
    //   ...this.session,
    //   horizontal: Number(this.selectedBoardSize.substr(0, 1)),
    //   vertical: Number(this.selectedBoardSize.substr(4, 1)),
    //   themes: [],
    // };

    // this.participant = this.session.creator;

    // TODO: refactor (use JSON instead)
    const body = new URLSearchParams();
    // body.set('creator', this.session.creator);
    // body.set('name', this.session.name);
    body.set('horizontal', this.selectedBoardSize.substr(0, 1));
    body.set('vertical', this.selectedBoardSize.substr(4, 1));

    // TODO: refactor (multiple teams)
    body.set('theme', 'todo');
    // body.set('teams', this.session.teams.toString());

    this.http
      .post(`/api/create-session`, body.toString(), environment.formHeader)
      .toPromise()
      .then((response: Response<Session>) => {
        this.activeSession = response.data;
        console.info('Active Session:', this.activeSession);

        this.router.navigateByUrl('/spielen'); // TODO: navigate to correct game (use ID or session name as URL parameter)
      })
      .catch((error: any) => {
        console.error('An error occurred:', error);
      });
  }
}
