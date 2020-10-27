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

@Component({
  selector: 'spark-fountain-join-session',
  templateUrl: './join-session.component.html',
  styleUrls: ['./join-session.component.scss'],
})
export class JoinSessionComponent implements OnInit {
  public participant: string;

  public selectedSession: any;
  public sessions2Join: JoinSession[];
  public selectedSession2Join: JoinSession;

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
    this.sessions2Join = [];
    this.selectedSession2Join = null;

    this.participant = 'Mr(s). Anonymous';
    this.selectedTeam2Join = '';
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

  selectSession2Join(joinSession: JoinSession): void {
    this.selectedSession2Join = joinSession;
  }

  updateTeamMembers(): void {
    const selectedTeam = this.selectedSession2Join.teams.find(
      (team: Team) => team.name === this.selectedTeam2Join
    );

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
    if (this.selectedSession2Join === null) return;

    const body = new URLSearchParams();
    body.set('participant', this.participant);
    body.set('session', this.selectedSession2Join.name);
    body.set('team', this.selectedTeam2Join);

    this.http
      .post(
        `/api/join-session`,
        body.toString(),
        environment.formHeader
      )
      .toPromise()
      .then((response: Response<Session>) => {
        this.activeSession = response.data;
        console.info('Active Session:', this.activeSession);

        this.userService.setUser({
          session: this.activeSession.name,
          team: this.selectedTeam2Join,
          player: this.participant,
        });
        this.user = this.userService.getUser();

        this.router.navigateByUrl('/spielen'); // TODO: navigate to correct game (use ID or session name as URL parameter)
      })
      .catch((error: any) => {
        console.error('Could not join session:', error);
      });
  }
}
