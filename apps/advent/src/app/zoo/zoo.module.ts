import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZooRoutingModule } from './zoo-routing.module';
import { ZooComponent } from './zoo.component';


@NgModule({
  declarations: [ZooComponent],
  imports: [
    CommonModule,
    ZooRoutingModule
  ]
})
export class ZooModule { }
