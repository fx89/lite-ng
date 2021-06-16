import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteNgDialogComponent } from './dialog/dialog.component';
import { LiteNgPushbuttonModule } from '../pushbutton/pushbutton.module';



@NgModule({
  declarations: [
    LiteNgDialogComponent
  ],
  imports: [
    CommonModule,
    LiteNgPushbuttonModule
  ],
  exports: [
    LiteNgDialogComponent
  ]
})
export class LiteNgDialogModule { }
