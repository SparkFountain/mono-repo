import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IglooRoutingModule } from './igloo-routing.module';
import { IglooComponent } from './igloo.component';


@NgModule({
  declarations: [IglooComponent],
  imports: [
    CommonModule,
    IglooRoutingModule
  ]
})
export class IglooModule { }
