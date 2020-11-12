import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';
import { SceneModule } from '../scene/scene.module';

@NgModule({
  declarations: [HotelComponent],
  imports: [CommonModule, HotelRoutingModule, SceneModule],
})
export class HotelModule {}
