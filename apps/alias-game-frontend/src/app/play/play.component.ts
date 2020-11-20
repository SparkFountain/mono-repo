import { Component, OnInit } from '@angular/core';
import { Session } from '@spark-fountain/alias-game';

@Component({
  selector: 'spark-fountain-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  public page: string; // TODO: use or remove this variable?

  public activeSession: Session;

  public participant: string;

  public winnerTeam: string;

  public noActivePlayer: boolean;
  public iAmActivePlayer: boolean;

  constructor() {}

  ngOnInit(): void {
    this.winnerTeam = '';
    this.noActivePlayer = true;

    // TODO: refactor (the below stuff is just for debugging)
    this.activeSession = {
      name: 'Test Session',
      creator: 'Spark Fountain',
      horizontal: 5,
      vertical: 5,
      themes: [],
      teams: [
        {
          name: 'Rot',
          active: true,
          color: 'ff0000',
          players: [
            {
              name: 'Alf',
              active: false,
            },
            {
              name: 'Barbara',
              active: false,
            },
            {
              name: 'Klöten-Klaus',
              active: false,
            },
          ],
          remainingCards: 7,
        },
        {
          name: 'Blau',
          active: false,
          color: '0000ff',
          players: [
            {
              name: 'Kathi',
              active: false,
            },
            {
              name: 'Werner',
              active: false,
            },
            {
              name: 'Kalle Schwansen',
              active: false,
            },
          ],
          remainingCards: 8,
        },
      ],
      cards: [
        {
          x: 0,
          y: 0,
          word: 'Eins',
          color: 'ff0000',
          uncovered: true,
        },
        {
          x: 1,
          y: 0,
          word: 'Zwei',
          color: '0000ff',
          uncovered: true,
        },
        {
          x: 2,
          y: 0,
          word: 'Drei',
          color: 'ff0000',
          uncovered: false,
        },
        {
          x: 3,
          y: 0,
          word: 'Vier',
          color: 'ff0000',
          uncovered: false,
        },
        {
          x: 4,
          y: 0,
          word: 'Fünf',
          color: '000000',
          uncovered: true,
        },
        {
          x: 0,
          y: 1,
          word: 'Sechs',
          color: '000000',
          uncovered: true,
        },
        {
          x: 1,
          y: 1,
          word: 'Sieben',
          color: '000000',
          uncovered: true,
        },
        {
          x: 2,
          y: 1,
          word: 'Acht',
          color: '000000',
          uncovered: true,
        },
        {
          x: 3,
          y: 1,
          word: 'Neun',
          color: '000000',
          uncovered: true,
        },
        {
          x: 4,
          y: 1,
          word: 'Zehn',
          color: '000000',
          uncovered: true,
        },
        {
          x: 0,
          y: 2,
          word: 'Elf',
          color: '000000',
          uncovered: true,
        },
        {
          x: 1,
          y: 2,
          word: 'Zwölf',
          color: '000000',
          uncovered: true,
        },
        {
          x: 2,
          y: 2,
          word: 'Dreizehn',
          color: '000000',
          uncovered: true,
        },
        {
          x: 3,
          y: 2,
          word: 'Vierzehn',
          color: '000000',
          uncovered: true,
        },
        {
          x: 4,
          y: 2,
          word: 'Fünfzehn',
          color: '000000',
          uncovered: true,
        },
        {
          x: 0,
          y: 3,
          word: 'Sechzehn',
          color: '000000',
          uncovered: true,
        },
        {
          x: 1,
          y: 3,
          word: 'Siebzehn',
          color: '000000',
          uncovered: true,
        },
        {
          x: 2,
          y: 3,
          word: 'Achtzehn',
          color: '000000',
          uncovered: true,
        },
        {
          x: 3,
          y: 3,
          word: 'Neunzehn',
          color: '000000',
          uncovered: true,
        },
        {
          x: 4,
          y: 3,
          word: 'Zwanzig',
          color: '000000',
          uncovered: true,
        },
        {
          x: 0,
          y: 4,
          word: 'Einundzwanzig',
          color: '000000',
          uncovered: true,
        },
        {
          x: 1,
          y: 4,
          word: 'Zweiundzwanzig',
          color: '000000',
          uncovered: true,
        },
        {
          x: 2,
          y: 4,
          word: 'Dreiundzwanzig',
          color: '000000',
          uncovered: true,
        },
        {
          x: 3,
          y: 4,
          word: 'Vierundzwanzig',
          color: '000000',
          uncovered: true,
        },
        {
          x: 4,
          y: 4,
          word: 'Fünfundzwanzig',
          color: '000000',
          uncovered: true,
        },
      ],
      started: true,
      description: {
        term: 'Ablauf',
        amount: 3,
        accepted: false,
        denied: false,
      },
    };
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
    //     `${/api}/request-active-player`,
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
    //     `${/api}/reset-session`,
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
