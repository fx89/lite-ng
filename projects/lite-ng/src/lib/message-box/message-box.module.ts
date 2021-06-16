import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteNgMsgboxComponent } from './msgbox/msgbox.component';
import { LiteNgServiceableMsgboxComponent } from './serviceable-msgbox/serviceable-msgbox.component';
import { LiteNgMsgboxService } from './msgbox.service';
import { LiteNgDialogModule } from '../dialog/dialog.module';



@NgModule({
  declarations: [
    LiteNgMsgboxComponent,
    LiteNgServiceableMsgboxComponent
  ],
  imports: [
    CommonModule,
    LiteNgDialogModule
  ],
  exports: [
    LiteNgMsgboxComponent,
    LiteNgServiceableMsgboxComponent
  ],
  providers: [
    LiteNgMsgboxService
  ]
})
export class LiteNgMessageBoxModule { }
