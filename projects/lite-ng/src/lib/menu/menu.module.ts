import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteNgVerticalButtonsMenuComponent} from './vertical-buttons-menu/vertical-buttons-menu.component';
import { LiteNgDialogModule } from '../dialog/dialog.module';
import { LiteNgPushbuttonModule } from '../pushbutton/pushbutton.module';



@NgModule({
  declarations: [
    LiteNgVerticalButtonsMenuComponent
  ],
  imports: [
    CommonModule,
    LiteNgDialogModule,
    LiteNgPushbuttonModule
  ],
  exports: [
    LiteNgVerticalButtonsMenuComponent
  ]
})
export class LiteNgMenuModule { }
