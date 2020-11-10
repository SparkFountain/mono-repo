import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IceSkatingComponent } from './ice-skating.component';

const routes: Routes = [
  {
    path: '',
    component: IceSkatingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IceSkatingRoutingModule {}
