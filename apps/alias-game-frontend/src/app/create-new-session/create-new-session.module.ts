import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewSessionRoutingModule } from './create-new-session-routing.module';
import { CreateNewSessionComponent } from './create-new-session.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateNewSessionComponent],
  imports: [CommonModule, CreateNewSessionRoutingModule, FormsModule],
})
export class CreateNewSessionModule {}
