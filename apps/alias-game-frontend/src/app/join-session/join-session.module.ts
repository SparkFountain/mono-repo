import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinSessionRoutingModule } from './join-session-routing.module';
import { JoinSessionComponent } from './join-session.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [JoinSessionComponent],
  imports: [CommonModule, JoinSessionRoutingModule, FormsModule],
})
export class JoinSessionModule {}
