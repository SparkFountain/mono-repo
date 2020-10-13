import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinSessionComponent } from './join-session.component';

const routes: Routes = [
  {
    path: '',
    component: JoinSessionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinSessionRoutingModule {}
