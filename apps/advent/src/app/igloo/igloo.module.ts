import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IglooRoutingModule } from './igloo-routing.module';
import { IglooComponent } from './igloo.component';
import { SceneModule } from '../scene/scene.module';

@NgModule({
  declarations: [IglooComponent],
  imports: [CommonModule, IglooRoutingModule, SceneModule],
})
export class IglooModule {}
