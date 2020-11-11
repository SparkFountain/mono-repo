import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneRoutingModule } from './scene-routing.module';
import { SceneComponent } from './scene.component';
import { ContainerModule } from '../container/container.module';

@NgModule({
  declarations: [SceneComponent],
  imports: [CommonModule, ContainerModule, SceneRoutingModule],
})
export class SceneModule {}
