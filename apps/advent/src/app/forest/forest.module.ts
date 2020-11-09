import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForestRoutingModule } from './forest-routing.module';
import { ForestComponent } from './forest.component';


@NgModule({
  declarations: [ForestComponent],
  imports: [
    CommonModule,
    ForestRoutingModule
  ]
})
export class ForestModule { }
