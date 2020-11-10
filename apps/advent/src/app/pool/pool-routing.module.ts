import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoolComponent } from './pool.component';

const routes: Routes = [
  {
    path: '',
    component: PoolComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoolRoutingModule {}
