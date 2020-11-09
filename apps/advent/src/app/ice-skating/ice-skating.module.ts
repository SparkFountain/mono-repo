import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IceSkatingRoutingModule } from './ice-skating-routing.module';
import { IceSkatingComponent } from './ice-skating.component';


@NgModule({
  declarations: [IceSkatingComponent],
  imports: [
    CommonModule,
    IceSkatingRoutingModule
  ]
})
export class IceSkatingModule { }
