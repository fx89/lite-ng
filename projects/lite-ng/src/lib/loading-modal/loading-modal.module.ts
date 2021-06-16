import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteNgLoadingModalComponent } from './loading-modal/loading-modal.component';
import { LiteNgLoadingWheelComponent } from './loading-wheel/loading-wheel.component';
import { LiteNgLoadingModalService } from './loading-modal.service';



@NgModule({
  declarations: [
    LiteNgLoadingModalComponent,
    LiteNgLoadingWheelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LiteNgLoadingModalComponent,
    LiteNgLoadingWheelComponent
  ],
  providers: [
    LiteNgLoadingModalService
  ]
})
export class LiteNgLoadingModalModule { }
