import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteNgListComponent } from './list/list.component';



@NgModule({
  declarations: [
    LiteNgListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LiteNgListComponent
  ]
})
export class LiteNgListModule { }
