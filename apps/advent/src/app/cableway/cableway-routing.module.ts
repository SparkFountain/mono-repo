import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CablewayComponent } from './cableway.component';

const routes: Routes = [
  {
    path: '',
    component: CablewayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CablewayRoutingModule {}
