import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoolRoutingModule } from './pool-routing.module';
import { PoolComponent } from './pool.component';
import { ContainerModule } from '../container/container.module';
import { SceneModule } from '../scene/scene.module';

@NgModule({
  declarations: [PoolComponent],
  imports: [CommonModule, PoolRoutingModule, ContainerModule, SceneModule],
})
export class PoolModule {}
