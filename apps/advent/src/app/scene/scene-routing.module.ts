import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SceneComponent } from './scene.component';

const routes: Routes = [
  {
    path: '',
    component: SceneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneRoutingModule {}
