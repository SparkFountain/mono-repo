import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewSessionRoutingModule } from './create-new-session-routing.module';
import { CreateNewSessionComponent } from './create-new-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [CreateNewSessionComponent],
  imports: [
    CommonModule,
    CreateNewSessionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class CreateNewSessionModule {}
