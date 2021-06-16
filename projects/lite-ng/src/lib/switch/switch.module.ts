import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteNgSwitchComponent } from './switch/switch.component';



@NgModule({
  declarations: [
    LiteNgSwitchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LiteNgSwitchComponent
  ]
})
export class SwitchModule { }
