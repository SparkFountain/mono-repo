import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, BoardRoutingModule, CardModule],
  exports: [BoardComponent],
})
export class BoardModule {}
