import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteNgTabComponent } from './lite-ng-tab/lite-ng-tab.component';
import { LiteNgTabButtonComponent } from './lite-ng-tab-button/lite-ng-tab-button.component';
import { LiteNgTabsHorizontalComponent } from './lite-ng-tabs-horizontal/lite-ng-tabs-horizontal.component';
import { LiteNgTabsVerticalComponent } from './lite-ng-tabs-vertical/lite-ng-tabs-vertical.component';



@NgModule({
  declarations: [
    LiteNgTabComponent,
    LiteNgTabButtonComponent,
    LiteNgTabsHorizontalComponent,
    LiteNgTabsVerticalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LiteNgTabComponent,
    LiteNgTabButtonComponent,
    LiteNgTabsHorizontalComponent,
    LiteNgTabsVerticalComponent
  ]
})
export class LiteNgTabsModule { }
