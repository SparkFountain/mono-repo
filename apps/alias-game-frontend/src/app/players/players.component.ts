import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session, Player, Team, User } from '@spark-fountain/alias-game';
import { UserService } from '../services/user.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'spark-fountain-alias-game-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  _activeSession: Session;
  @Input('activeSession')
  set activeSession(session: Session) {
    this._activeSession = session;
    this.activeTeam = this._activeSession.teams.find(
      (team: Team) => team.active
    ).name;
    this._activeSession.teams.forEach((team: Team) => {
      team.players.forEach((player: Player) => {
        if (player.name === this.user?.player) {
          this.iAmActivePlayer = player.active;
        }
      });
    });
  }
  @Output() activePlayer: EventEmitter<boolean> = new EventEmitter();
  @Output() leave: EventEmitter<void> = new EventEmitter();

  public user: User;

  public activeTeam: string;
  public iAmActivePlayer: boolean;
  public exchangeCards: boolean;

  public remainingCards: any;

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.activeTeam = '';
    this.iAmActivePlayer = false;
    this.exchangeCards = false;

    this.remainingCards = {};

    this.user = this.userService.getUser();
  }

  // TODO: implement or remove
  requestActivePlayer(): void {
    this.iAmActivePlayer = true;
    this.activePlayer.emit(true);

    // const body = new URLSearchParams();
    // body.set('session', this.activeSession.name);
    // body.set('team', 'TODO');
    // body.set('player', 'TODO');

    // this.http
    //   .post(`/api/request-active-player`, body.toString())
    //   .toPromise()
    //   .then((response: Response<void>) => {});
  }

  startSession(): void {
    // check if two active players exist
    let activePlayers = 0;
    this._activeSession.teams.forEach((team: Team) => {
      team.players.forEach((player: Player) => {
        if (player.active) {
          activePlayers++;
        }
      });
    });

    if (activePlayers === 2) {
      const body = new URLSearchParams();
      body.set('session', this._activeSession.name);

      this.http
        .post(`/api/start-session`, body.toString(), environment.formHeader)
        .toPromise();
    } else {
      alert(
        'Bevor das Spiel losgeht, muss pro Team ein aktiver Spieler gewählt sein, der die Begriffe erklärt.'
      );
    }
  }

  nextRound(): void {
    const body = new URLSearchParams();
    body.set('session', this._activeSession.name);
    this.http
      .post(`/api/next-round`, body.toString(), environment.formHeader)
      .toPromise();
  }

  leaveSession(): void {
    // const body = new URLSearchParams();
    // body.set("session", this._activeSession.name);
    // // body.set('player', this._activeSession.name);

    // this.http.post(
    //   `/api/leave-session`,
    //   body.toString(),
    //   environment.formHeader
    // );

    this.iAmActivePlayer = false;
    this.activePlayer.emit(false);
    this.leave.emit();
  }
}
