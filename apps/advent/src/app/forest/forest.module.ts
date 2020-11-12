import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForestRoutingModule } from './forest-routing.module';
import { ForestComponent } from './forest.component';
import { SceneModule } from '../scene/scene.module';

@NgModule({
  declarations: [ForestComponent],
  imports: [CommonModule, ForestRoutingModule, SceneModule],
})
export class ForestModule {}
