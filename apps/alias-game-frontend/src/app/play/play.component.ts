import { Component, OnInit } from '@angular/core';
import { ActiveSession } from '@spark-fountain/alias-game';

@Component({
  selector: 'spark-fountain-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  public page: string;  // TODO: use or remove this variable?

  public activeSession: ActiveSession;

  public participant: string;

  public winnerTeam: string;

  public noActivePlayer: boolean;
  public iAmActivePlayer: boolean;

  constructor() {}

  ngOnInit(): void {
    this.winnerTeam = '';
    this.noActivePlayer = true;
  }

  fetchActiveSession(): void {
    // TODO: completely refactor (use websocket broadcasting)
    // if (this.page === 'play') {
    //   this.sessionService
    //     .fetchActiveSession(this.activeSession.name)
    //     .then((response: Response<ActiveSession>) => {
    //       this.activeSession = response.data;
    //       this.activeSession.teams.forEach((team: Team) => {
    //         team.players.forEach((player: Player) => {
    //           if (player.active) {
    //             if (player.name === this.user.player) {
    //               this.iAmActivePlayer = true;
    //             } else if (team.name === this.user.team) {
    //               this.noActivePlayer = false;
    //             }
    //           }
    //         });
    //         if (team.remainingCards === 0) {
    //           this.winnerTeam = team.name;
    //         }
    //       });
    //       // black card: team loses immediately
    //       this.activeSession.cards.forEach((card: Card) => {
    //         if (card.color === '#222222' && card.uncovered === true) {
    //           this.winnerTeam = this.activeSession.teams.find(
    //             (team: Team) => team.active === false
    //           ).name;
    //         }
    //       });
    //     });
    // }
  }

  requestActivePlayer(): void {
    // TODO: refactor
    // const body = new URLSearchParams();
    // body.set('session', this.user.session);
    // body.set('team', this.user.team);
    // body.set('player', this.user.player);
    // this.http
    //   .post(
    //     `${environment.server}/request-active-player`,
    //     body.toString(),
    //     environment.formHeader
    //   )
    //   .toPromise()
    //   .then((response: Response<void>) => {
    //     // TODO: implement case that player could be denied
    //     this.iAmActivePlayer = true;
    //   });
  }

  resetSession(): void {
    // TODO: refactor
    // const body = new URLSearchParams();
    // body.set('session', this.user.session);
    // this.http
    //   .post(
    //     `${environment.server}/reset-session`,
    //     body.toString(),
    //     environment.formHeader
    //   )
    //   .toPromise()
    //   .then(() => {
    //     this.iAmActivePlayer = false;
    //     this.winnerTeam = '';
    //   });
  }
}
