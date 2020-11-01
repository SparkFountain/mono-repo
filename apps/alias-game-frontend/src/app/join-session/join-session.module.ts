import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinSessionRoutingModule } from './join-session-routing.module';
import { JoinSessionComponent } from './join-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [JoinSessionComponent],
  imports: [
    CommonModule,
    JoinSessionRoutingModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [JoinSessionComponent],
})
export class JoinSessionModule {}
