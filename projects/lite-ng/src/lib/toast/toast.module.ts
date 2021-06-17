import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteNgToastComponent } from './toast/toast.component';
import { LiteNgServiceableToastComponent } from './serviceable-toast/serviceable-toast.component';
import { LiteNgToastService } from './toast.service';



@NgModule({
  declarations: [
    LiteNgToastComponent,
    LiteNgServiceableToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LiteNgToastComponent,
    LiteNgServiceableToastComponent
  ],
  providers: [
    LiteNgToastService
  ]
})
export class LiteNgToastModule { }
