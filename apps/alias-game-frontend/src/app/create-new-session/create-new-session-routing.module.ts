import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewSessionComponent } from './create-new-session.component';

const routes: Routes = [
  {
    path: '',
    component: CreateNewSessionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateNewSessionRoutingModule {}
