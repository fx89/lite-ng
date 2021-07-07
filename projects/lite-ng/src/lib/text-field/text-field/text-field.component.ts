import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { LiteNgValidationService } from '../../validation/validation.service';

@Component({
  selector: 'lite-ng-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class LiteNgTextFieldComponent implements OnInit, AfterViewInit {

  @Input()
  id : string = "_" + uuid();

  @Input()
  value : string = <any>undefined;

  @Output()
  valueChange : EventEmitter<string> = new EventEmitter<string>();

  @Output()
  keyUpEvent : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  placeholder: string = "Enter value";

  @Input()
  widthPX: number = <any>undefined;

  @Input()
  widthPCT: number = <any>undefined;

  @Input()
  heightPX: number = 17;

  @Input()
  validationFunction : Function = () => "";

  @Input()
  additionalClass : string = " ";

  @Input()
  characterAllowedFunction : Function = (chr:any) => true;

  isValid : boolean = true;

  constructor(private validationService : LiteNgValidationService) { }

  ngOnInit() {
    this.validate();
  }

  ngAfterViewInit() {
    window.addEventListener("click", (event) => {
      this.validate();
    });
  }
  


  onChange($event : any) {
    this.validate();
    this.valueChange.emit(this.value);
  }

  onKeyUp($event : any) {
    this.removeNotAllowedCharacters();
    this.validate();
    this.keyUpEvent.emit($event);
  }

  private removeNotAllowedCharacters() {
    let chrArr = Array.from(this.value);
    let val : string = "";
    chrArr.forEach(chr => {
      if (this.characterAllowedFunction(chr)) {
        val += chr;
      }
    });
    this.value = val;
  }

  validate() {
    let validationMessage : string = this.validationFunction(this.value);
    this.validationService.setValidationMessage(this.getTextboxId(), validationMessage);
    this.isValid = validationMessage ? false : true;
  }

  getTextboxId() : string {
    return this.id + "_textbox";
  }

  getClassName() : string {
	  return "text-field " + this.additionalClass;
  }
}
