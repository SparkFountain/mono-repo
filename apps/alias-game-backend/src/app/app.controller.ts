import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { AppService } from './app.service';
import {
  ActiveSession,
  JoinSession,
  Response,
  User,
} from '@spark-fountain/alias-game';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // TODO: remove this router later again
  @Get()
  getData(): { message: string } {
    return this.appService.getData();
  }

  @Post()
  createSession(@Body() session: ActiveSession): Response<ActiveSession> {
    // TODO: implement
    return null;
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
