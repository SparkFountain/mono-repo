import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForestComponent } from './forest.component';

const routes: Routes = [
  {
    path: '',
    component: ForestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForestRoutingModule {}
