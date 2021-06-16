import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteNgDataTableComponent } from './data-table/data-table.component';
import { LiteNgCrudTableComponent } from './crud-table/crud-table.component';
import { LiteNgValidationModule } from '../validation/validation.module';
import { LiteNgMessageBoxModule } from '../message-box/message-box.module';
import { LiteNgListModule } from '../list/list.module';
import { LiteNgDialogModule } from '../dialog/dialog.module';
import { LiteNgPushbuttonModule } from '../pushbutton/pushbutton.module';



@NgModule({
  declarations: [
    LiteNgDataTableComponent,
    LiteNgCrudTableComponent
  ],
  imports: [
    CommonModule,
    LiteNgValidationModule,
    LiteNgMessageBoxModule,
    LiteNgListModule,
    LiteNgDialogModule,
    LiteNgPushbuttonModule
  ],
  exports: [
    LiteNgDataTableComponent,
    LiteNgCrudTableComponent
  ]
})
export class LiteNgTableModule { }
