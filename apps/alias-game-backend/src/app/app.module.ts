import { HttpModule, Module } from '@nestjs/common';
import { ChatModule } from '../chat/chat.module';
import { TermsService } from '../services/terms.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseService } from './base.service';

@Module({
  imports: [ChatModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, BaseService, TermsService],
})
export class AppModule {}
