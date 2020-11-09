import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JazzchorRoutingModule } from './jazzchor-routing.module';
import { JazzchorComponent } from './jazzchor.component';


@NgModule({
  declarations: [JazzchorComponent],
  imports: [
    CommonModule,
    JazzchorRoutingModule
  ]
})
export class JazzchorModule { }
