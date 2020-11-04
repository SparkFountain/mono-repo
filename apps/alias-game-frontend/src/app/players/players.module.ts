import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PlayersComponent],
  imports: [CommonModule, PlayersRoutingModule, MatCardModule, MatButtonModule],
  exports: [PlayersComponent],
})
export class PlayersModule {}
