import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowToPlayRoutingModule } from './how-to-play-routing.module';
import { HowToPlayComponent } from './how-to-play.component';


@NgModule({
  declarations: [HowToPlayComponent],
  imports: [
    CommonModule,
    HowToPlayRoutingModule
  ]
})
export class HowToPlayModule { }
