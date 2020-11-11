import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';
import { ContainerModule } from '../container/container.module';
import { SceneModule } from '../scene/scene.module';

@NgModule({
  declarations: [BarComponent],
  imports: [CommonModule, BarRoutingModule, ContainerModule, SceneModule],
})
export class BarModule {}
