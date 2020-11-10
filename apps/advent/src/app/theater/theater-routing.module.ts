import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheaterComponent } from './theater.component';

const routes: Routes = [
  {
    path: '',
    component: TheaterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheaterRoutingModule {}
