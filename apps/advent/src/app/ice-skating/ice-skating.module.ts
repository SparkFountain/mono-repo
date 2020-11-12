import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IceSkatingRoutingModule } from './ice-skating-routing.module';
import { IceSkatingComponent } from './ice-skating.component';
import { SceneModule } from '../scene/scene.module';

@NgModule({
  declarations: [IceSkatingComponent],
  imports: [CommonModule, IceSkatingRoutingModule, SceneModule],
})
export class IceSkatingModule {}
