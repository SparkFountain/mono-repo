import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { SceneModule } from '../scene/scene.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, WelcomeRoutingModule, SceneModule],
})
export class WelcomeModule {}
