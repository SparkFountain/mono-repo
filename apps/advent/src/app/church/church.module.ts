import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChurchRoutingModule } from './church-routing.module';
import { ChurchComponent } from './church.component';


@NgModule({
  declarations: [ChurchComponent],
  imports: [
    CommonModule,
    ChurchRoutingModule
  ]
})
export class ChurchModule { }
