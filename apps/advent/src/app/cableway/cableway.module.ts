import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CablewayRoutingModule } from './cableway-routing.module';
import { CablewayComponent } from './cableway.component';


@NgModule({
  declarations: [CablewayComponent],
  imports: [
    CommonModule,
    CablewayRoutingModule
  ]
})
export class CablewayModule { }
