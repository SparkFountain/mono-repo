import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { AppService } from './app.service';
import {
  Session,
  JoinSession,
  Response,
  User,
} from '@spark-fountain/alias-game';
import { TermsService } from '../services/terms.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly termsService: TermsService
  ) {}

  @Get('get-random-terms')
  getRandomTerms(@Query('amount') amount: number): Promise<string[]> {
    return this.termsService.getRandomTerms(amount);
  }

  @Post('create-session')
  createSession(@Body() session: Session): Response<Session> {
    return {
      status: 'success',
      data: this.appService.createSession(session),
    };
  }

  @Get()
  getSessions(): Response<JoinSession[]> {
    // TODO: implement
    return null;
  }

  @Post()
  joinSession(@Body() session: Session): Response<Session> {
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
