import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IglooComponent } from './igloo.component';

const routes: Routes = [
  {
    path: '',
    component: IglooComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IglooRoutingModule {}
