import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Session, Theme } from '@spark-fountain/alias-game';
import { environment } from '../../environments/environment';

import { Response } from '@spark-fountain/alias-game';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'spark-fountain-alias-game-create-new-session',
  templateUrl: './create-new-session.component.html',
  styleUrls: ['./create-new-session.component.scss'],
})
export class CreateNewSessionComponent implements OnInit {
  public sessionForm: FormGroup;

  public boardSizes: string[];
  public selectedBoardSize: string;

  public themes: Theme[];
  public selectedThemes: FormControl;

  public participant: string;

  public activeSession: Session;
  public iAmActivePlayer: boolean;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.boardSizes = [
      '3 x 3',
      '4 x 3',
      '4 x 4',
      '5 x 4',
      '5 x 5',
      '6 x 5',
      '6 x 6',
    ];

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

    this.sessionForm = new FormGroup({
      creator: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
      ]),
      sessionName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
      ]),
      selectedBoardSize: new FormControl(this.boardSizes[4]),
      selectedThemes: new FormControl([], [Validators.required]),
      team1Name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
      ]),
      team1Color: new FormControl('', [
        Validators.required,
        Validators.pattern('#[0-9a-f]{6}'),
      ]),
      team2Name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
      ]),
      team2Color: new FormControl('', [Validators.required]),
    });

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
        if (this.sessionForm.get('creator').hasError('required')) {
          return 'Bitte gib deinen Namen ein';
        } else if (this.sessionForm.get('creator').hasError('minlength')) {
          return 'Gib bitte mindestens drei Zeichen ein';
        } else if (this.sessionForm.get('creator').hasError('maxlength')) {
          return 'Bitte beschränke dich auf 16 Zeichen';
        }
      case 'sessionName':
        if (this.sessionForm.get('sessionName').hasError('required')) {
          return 'Bitte gib einen Session-Namen ein';
        } else if (this.sessionForm.get('sessionName').hasError('minlength')) {
          return 'Gib bitte mindestens drei Zeichen ein';
        } else if (this.sessionForm.get('sessionName').hasError('maxlength')) {
          return 'Bitte beschränke dich auf 16 Zeichen';
        }
      case 'selectedThemes':
        return 'Bitte wähle mindestens ein Thema aus';
      case 'team1Name':
        if (this.sessionForm.get('team1Name').hasError('required')) {
          return 'Bitte gib einen Team-Namen ein';
        } else if (this.sessionForm.get('team1Name').hasError('minlength')) {
          return 'Gib bitte mindestens drei Zeichen ein';
        } else if (this.sessionForm.get('team1Name').hasError('maxlength')) {
          return 'Bitte beschränke dich auf 16 Zeichen';
        }
      case 'team1Color':
        if (this.sessionForm.get('team1Color').hasError('pattern')) {
          return 'Ungültiger Farb-Code';
        } else if (this.sessionForm.get('team1Color').hasError('required')) {
          return 'Bitte klicke auf das rechte Icon oder tippe einen Farbcode ein';
        }
      case 'team2Name':
        if (this.sessionForm.get('team2Name').hasError('required')) {
          return 'Bitte gib einen Team-Namen ein';
        } else if (this.sessionForm.get('team2Name').hasError('minlength')) {
          return 'Gib bitte mindestens drei Zeichen ein';
        } else if (this.sessionForm.get('team2Name').hasError('maxlength')) {
          return 'Bitte beschränke dich auf 16 Zeichen';
        }
      case 'team1Color':
        if (this.sessionForm.get('team2Color').hasError('pattern')) {
          return 'Ungültiger Farb-Code';
        } else if (this.sessionForm.get('team2Color').hasError('required')) {
          return 'Bitte klicke auf das rechte Icon oder tippe einen Farbcode ein';
        }
    }
    return 'Unbekannter Fehler';
  }

  onSubmit() {
    console.log(this.sessionForm.value); // { first: '', last: '' }
    console.log(this.sessionForm.valid); // false
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
