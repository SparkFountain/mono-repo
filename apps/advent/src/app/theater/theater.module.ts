import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TheaterRoutingModule } from './theater-routing.module';
import { TheaterComponent } from './theater.component';
import { SceneModule } from '../scene/scene.module';

@NgModule({
  declarations: [TheaterComponent],
  imports: [CommonModule, TheaterRoutingModule, SceneModule],
})
export class TheaterModule {}
