import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import {
  ActiveSession,
  JoinSession,
  Response,
  Session,
  User,
} from '@spark-fountain/alias-game';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create-session')
  createSession(@Body() session: ActiveSession): Response<ActiveSession> {
    this.appService.createSession(session);

    // $session = this.appService.getSession(session.name);
    // $teams = this.appService.getSessionTeams(session.name);
    // let finalTeams = [];
    // foreach($teams as $team) {
    //   $players = getTeamPlayers(session.name'], $team['name);
    //   array_push($finalTeams, array(
    //     'name' => $team['name'],
    //     'color' => $team['color'],
    //     'active' => $team['active'],
    //     'players' => $players
    //   ));
    // }

    const cards = this.appService.getSessionCards(session.name);

    return {
      status: 'success',
      data: null,
      // data: {
      //   name: session.name,
      //   creator: session.creator,
      //   horizontal: session.horizontal,
      //   vertical: session.vertical,
      //   theme: session.theme,
      //   teams: finalTeams,
      //   cards,
      //   started:
      // }
    };
  }

  @Get()
  getSessions(): Response<JoinSession[]> {
    // TODO: implement
    return null;
  }

  @Post()
  joinSession(@Body() session: ActiveSession): Response<ActiveSession> {
    // TODO: implement
    return null;
  }

  @Post()
  requestActivePlayer(@Body() user: User): Response<void> {
    // TODO: implement
    return null;
  }

  @Post()
  resetSession(@Body() sessionName: string): Response<void> {
    // TODO: implement
    return null;
  }

  @Post()
  startSession(@Body() sessionName: string): Response<void> {
    // TODO: implement
    return null;
  }

  @Post()
  leaveSession(@Body() sessionName: string): Response<void> {
    // TODO: implement
    return null;
  }

  @Post()
  nextRound(@Body() sessionName: string): Response<void> {
    // TODO: implement
    return null;
  }

  // TODO: what about "fetch-session"?
}
