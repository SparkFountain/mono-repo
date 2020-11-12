import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZooRoutingModule } from './zoo-routing.module';
import { ZooComponent } from './zoo.component';
import { SceneModule } from '../scene/scene.module';

@NgModule({
  declarations: [ZooComponent],
  imports: [CommonModule, ZooRoutingModule, SceneModule],
})
export class ZooModule {}
