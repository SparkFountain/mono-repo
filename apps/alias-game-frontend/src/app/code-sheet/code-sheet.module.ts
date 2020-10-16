import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeSheetRoutingModule } from './code-sheet-routing.module';
import { CodeSheetComponent } from './code-sheet.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CodeSheetComponent],
  imports: [CommonModule, CodeSheetRoutingModule, FormsModule],
  exports: [CodeSheetComponent],
})
export class CodeSheetModule {}
