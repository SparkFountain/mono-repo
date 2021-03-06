import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CablewayRoutingModule } from './cableway-routing.module';
import { CablewayComponent } from './cableway.component';
import { ContainerModule } from '../container/container.module';
import { SceneModule } from '../scene/scene.module';

@NgModule({
  declarations: [CablewayComponent],
  imports: [CommonModule, CablewayRoutingModule, ContainerModule, SceneModule],
})
export class CablewayModule {}
