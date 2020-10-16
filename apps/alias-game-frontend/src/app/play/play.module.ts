import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';
import { PlayersModule } from '../players/players.module';
import { BoardModule } from '../board/board.module';
import { CodeSheetModule } from '../code-sheet/code-sheet.module';
import { HistoryModule } from '../history/history.module';
import { WinnerModule } from '../winner/winner.module';

@NgModule({
  declarations: [PlayComponent],
  imports: [
    CommonModule,
    PlayRoutingModule,
    PlayersModule,
    BoardModule,
    CodeSheetModule,
    HistoryModule,
    WinnerModule,
  ],
  exports: [PlayComponent],
})
export class PlayModule {}
