import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteNgAccordionComponent } from './accordion/accordion.component';
import { LiteNgAccordionSectionComponent } from './accordion-section/accordion-section.component';



@NgModule({
  declarations: [
    LiteNgAccordionComponent,
    LiteNgAccordionSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LiteNgAccordionComponent,
    LiteNgAccordionSectionComponent
  ]
})
export class LiteNgAccordionModule { }
