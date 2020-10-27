import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewSessionRoutingModule } from './create-new-session-routing.module';
import { CreateNewSessionComponent } from './create-new-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_COLOR_FORMATS,
  NgxMatColorPickerModule,
  NGX_MAT_COLOR_FORMATS,
} from '@angular-material-components/color-picker';

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
    MatButtonModule,
    NgxMatColorPickerModule,
    MatCardModule,
  ],
  providers: [{ provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }],
})
export class CreateNewSessionModule {}
