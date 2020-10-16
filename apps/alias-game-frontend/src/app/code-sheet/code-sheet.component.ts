import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  ActiveSession,
  Card,
  Player,
  Team,
  User,
} from '@spark-fountain/alias-game';
import { environment } from '../../environments/environment';
import { UserService } from '../services/user.service';

@Component({
  selector: 'spark-fountain-alias-game-code-sheet',
  templateUrl: './code-sheet.component.html',
  styleUrls: ['./code-sheet.component.scss'],
})
export class CodeSheetComponent implements OnInit {
  _activeSession: ActiveSession;
  @Input('activeSession')
  set activeSession(session: ActiveSession) {
    this._activeSession = session;
    this.activeTeam = this._activeSession.teams.find(
      (team: Team) => team.active
    ).name;
    this._activeSession.teams.forEach((team: Team) => {
      team.players.forEach((player: Player) => {
        if (player.active && player.name !== this.user.player) {
          this.activeOpponent = player.name;
        }
      });
    });

    if (this.activeTeam !== this.user.team) {
      if (this._activeSession.description.term !== '') {
        this.term = this._activeSession.description.term;
        this.amount = this._activeSession.description.amount;
      }
    }
  }

  public user: User;
  public activeTeam: string;
  public activeOpponent: string;

  public colors: Array<string[]>;
  public colorSize: number;

  public term: string;
  public amount: number;

  constructor(private http: HttpClient, private userService: UserService) {
    this.user = this.userService.getUser();
    this.activeTeam = '';
    this.activeOpponent = '';
  }

  ngOnInit(): void {
    this.term = '';
    this.amount = 2;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.colors = [];
      for (let y = 0; y < this._activeSession.vertical; y++) {
        this.colors.push([]);

        for (let x = 0; x < this._activeSession.horizontal; x++) {
          this.colors[y].push('');
        }
      }

      this._activeSession.cards.forEach((card: Card) => {
        this.colors[card.y][card.x] = card.color;
      });

      this.colorSize = (window.innerWidth * 0.15) / 5;
    }, 10);
  }

  requestDescription(): void {
    const body = new URLSearchParams();
    body.set('session', this._activeSession.name);
    body.set('team', this.activeTeam);
    body.set('word', this.term);
    body.set('amount', this.amount.toString());

    this.http
      .post(
        `/api/request-description`,
        body.toString(),
        environment.formHeader
      )
      .toPromise();
  }

  acceptDescription(): void {
    const body = new URLSearchParams();
    body.set('session', this._activeSession.name);

    this.http
      .post(
        `/api/accept-description`,
        body.toString(),
        environment.formHeader
      )
      .toPromise();
  }

  denyDescription(): void {
    const body = new URLSearchParams();
    body.set('session', this._activeSession.name);

    this.http
      .post(
        `/api/deny-description`,
        body.toString(),
        environment.formHeader
      )
      .toPromise();
  }
}
