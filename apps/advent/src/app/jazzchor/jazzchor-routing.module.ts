import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JazzchorComponent } from './jazzchor.component';

const routes: Routes = [
  {
    path: '',
    component: JazzchorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JazzchorRoutingModule {}
