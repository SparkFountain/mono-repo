import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinnerRoutingModule } from './winner-routing.module';
import { WinnerComponent } from './winner.component';

@NgModule({
  declarations: [WinnerComponent],
  imports: [CommonModule, WinnerRoutingModule],
  exports: [WinnerComponent],
})
export class WinnerModule {}
