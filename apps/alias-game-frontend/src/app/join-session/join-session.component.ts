import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  Session,
  JoinSession,
  Player,
  Team,
  User,
} from '@spark-fountain/alias-game';
import { environment } from '../../environments/environment';
import { Response } from '@spark-fountain/alias-game';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'spark-fountain-join-session',
  templateUrl: './join-session.component.html',
  styleUrls: ['./join-session.component.scss'],
})
export class JoinSessionComponent implements OnInit {
  public sessionForm: FormGroup;

  public participant: string;

  public selectedSession: any;
  public sessions2Join: JoinSession[];

  public selectedTeam2Join: string;
  public teamMembers: string;

  public activeSession: Session;

  public user: User;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sessionForm = new FormGroup({
      participant: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
      ]),
      session: new FormControl('', [Validators.required]),
      team: new FormControl('', [Validators.required]),
    });

    this.sessions2Join = [
      {
        name: 'Friday Fun',
        creator: 'Spark Fountain',
        teams: [
          {
            name: 'Rot',
            active: false,
            color: '',
            players: [],
            remainingCards: -1,
          },
          {
            name: 'Blau',
            active: false,
            color: '',
            players: [],
            remainingCards: -1,
          },
        ],
      },
      {
        name: 'Corona fahr zur Hölle',
        creator: 'Gott',
        teams: [
          {
            name: 'Grün',
            active: false,
            color: '',
            players: [],
            remainingCards: -1,
          },
          {
            name: 'Gelb',
            active: false,
            color: '',
            players: [],
            remainingCards: -1,
          },
        ],
      },
    ];

    this.participant = '';
    this.selectedTeam2Join = '';
  }

  unsetTeam(): void {
    this.sessionForm.get('team').setValue('');
  }

  getErrorMessage(field: string): string {
    switch (field) {
      case 'participant':
        if (this.sessionForm.get('participant').hasError('required')) {
          return 'Bitte gib deinen Namen ein';
        } else if (this.sessionForm.get('participant').hasError('minlength')) {
          return 'Gib bitte mindestens drei Zeichen ein';
        } else if (this.sessionForm.get('participant').hasError('maxlength')) {
          return 'Bitte beschränke dich auf 16 Zeichen';
        }
      case 'session':
        return 'Bitte wähle eine Session aus';
      case 'team':
        return 'Bitte wähle ein Team aus';
    }
    return 'Unbekannter Fehler';
  }

  onSubmit() {
    console.log(this.sessionForm.value); // { first: '', last: '' }
    console.log(this.sessionForm.valid); // false
  }

  getSessions(): void {
    this.http
      .get(`/api/get-sessions`)
      .toPromise()
      .then((response: Response<JoinSession[]>) => {
        this.sessions2Join = response.data;

        // navigate to page 'join session
      });
  }

  selectSession2Join(joinSession: JoinSession): void {}

  updateTeamMembers(): void {
    const selectedTeam = this.sessionForm.get('team').value;
    if (selectedTeam.players.length === 0) {
      this.teamMembers = ' ist noch niemand';
    } else if (selectedTeam.players.length === 1) {
      this.teamMembers = ` ist ${selectedTeam.players[0].name}`;
      if (selectedTeam.players[0].active) {
        this.teamMembers += ' (aktiv)';
      }
    } else {
      this.teamMembers = ' sind ';
      selectedTeam.players.forEach(
        (player: Player, index: number, array: Player[]) => {
          this.teamMembers += player.name;
          if (player.active) {
            this.teamMembers += ' (aktiv)';
          }
          if (index < array.length - 2) {
            this.teamMembers += ', ';
          } else if (index === array.length - 2) {
            this.teamMembers += ' und ';
          }
        }
      );
    }
  }

  joinSession(): void {
    // TODO: refactor
    // if (this.selectedSession2Join === null) return;
    // const body = new URLSearchParams();
    // body.set('participant', this.participant);
    // body.set('session', this.selectedSession2Join.name);
    // body.set('team', this.selectedTeam2Join);
    // this.http
    //   .post(`/api/join-session`, body.toString(), environment.formHeader)
    //   .toPromise()
    //   .then((response: Response<Session>) => {
    //     this.activeSession = response.data;
    //     console.info('Active Session:', this.activeSession);
    //     this.userService.setUser({
    //       session: this.activeSession.name,
    //       team: this.selectedTeam2Join,
    //       player: this.participant,
    //     });
    //     this.user = this.userService.getUser();
    //     this.router.navigateByUrl('/spielen'); // TODO: navigate to correct game (use ID or session name as URL parameter)
    //   })
    //   .catch((error: any) => {
    //     console.error('Could not join session:', error);
    //   });
  }
}
