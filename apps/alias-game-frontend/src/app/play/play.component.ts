import { Component, OnInit } from '@angular/core';
import { Card, Session } from '@spark-fountain/alias-game';

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

    // TODO: here come the terms for now
    const terms: string[] = [
      'Computer',
      'Performance',
      'A-Cappella',
      'Garten',
      'Abend',
      'Auto',
      'Leder',
      'Rhythmus',
      'Hund',
      'Mausefalle',
      'Jazz',
      'Musik',
      'Gesang',
      'Popmusik',
      'Mehrstimmig',
      'Ausstrahlung',
      'Haus',
      'Bank',
      'Bühnenwirkung',
      'Restaurant',
      'Zahnarzt',
      'Intonation',
      'Groove',
      'Ziege',
      'Nasal',
    ];
    let cards: Card[] = [];

    let x = 0;
    let y = 0;
    terms.forEach((term: string) => {
      cards.push({
        x,
        y,
        word: term,
        color: 'ff0000',
        uncovered: false,
      });

      if (x === 4) {
        y++;
        x = 0;
      } else {
        x++;
      }
    });

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
      cards,
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
