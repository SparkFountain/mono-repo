import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChurchRoutingModule } from './church-routing.module';
import { ChurchComponent } from './church.component';
import { ContainerModule } from '../container/container.module';
import { SceneModule } from '../scene/scene.module';

@NgModule({
  declarations: [ChurchComponent],
  imports: [CommonModule, ContainerModule, ChurchRoutingModule, SceneModule],
})
export class ChurchModule {}
