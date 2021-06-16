import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteNgDropdownListComponent } from './dropdown-list/dropdown-list.component';
import { LiteNgValidationModule } from '../validation/validation.module';
import { LiteNgListModule } from '../list/list.module';



@NgModule({
  declarations: [
    LiteNgDropdownListComponent
  ],
  imports: [
    CommonModule,
    LiteNgValidationModule,
    LiteNgListModule
  ],
  exports: [
    LiteNgDropdownListComponent
  ]
})
export class LiteNgDropdownListModule { }
