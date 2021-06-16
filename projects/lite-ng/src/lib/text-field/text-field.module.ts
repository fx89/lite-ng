import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiteNgTextFieldComponent } from './text-field/text-field.component';
import { LiteNgValidationModule } from '../validation/validation.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LiteNgTextFieldComponent
  ],
  imports: [
    CommonModule,
    LiteNgValidationModule,
    FormsModule
  ],
  exports: [
    LiteNgTextFieldComponent
  ]
})
export class TextFieldModule { }
