import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { LiteNgValidationService } from '../../validation/validation.service';

@Component({
  selector: 'lite-ng-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class LiteNgDropdownListComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input()
  id : string = "_" + uuid();

  @Input()
  widthPX : number = <any>undefined;

  @Input()
  widthPCT : number = 100;

  @Input()
  listHeightPX : number = 80;

  @Input()
  items : any[] = [];

  @Input()
  selectedItem : any;

  @Output()
  selectedItemChange : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  selctedItemDisplayFunction : Function = (item:any) => item? item.toString() : "";

  @Input()
  iconFunction : Function = () => "";

  @Input()
  titleFunction: Function = (item : any) => item.toString();

  @Input()
  descriptionFunction: Function = () => "";

  @Input()
  listRowType : string = "card"; // Possible values: card, compact

  @Input()
  showListIcons : boolean = true;

  @Input()
  validationFunction : Function = () => "";

  @Output()
  onSelectionChanged : EventEmitter<any> = new EventEmitter<any>();

  isValid : boolean = true;

  private listContainerElement : HTMLElement = <any>undefined;
  private textboxElement : HTMLElement = <any>undefined;
  private buttonElement : HTMLElement = <any>undefined;

  private visibility : boolean = false;


  constructor(private validationService : LiteNgValidationService) { }

  ngOnInit() {
    this.ensureElementsAreCollected();
    this.validate();
  }

  ngAfterViewInit() {
    this.ensureElementsAreCollected();
    this.validate();

    window.addEventListener("resize", () => {
      this.updateListCoords();
    });

    window.addEventListener("click", (event) => {
      this.validate();

      if (this.coordsAreWithinBoundingRect(event.clientX, event.clientY) == false) {
        if (this.visibility) {
          this.setListVisibility(false);
        }
      }
    });
  }

  ngAfterContentInit() {
    this.ensureElementsAreCollected();
    this.validate();
  }

  getTextboxId() : string {
    return this.id + "_textbox";
  }

  getContainerId() : string {
    return this.id + "_container";
  }

  getButtonId() : string {
    return this.id + "_button";
  }

  getListContainerId() : string {
    return this.id + "_list_container";
  }

  onTextboxClicked() {
    this.setListVisibility(true);
  }

  onButtonClicked() {
    this.setListVisibility(true);
  }

  setListVisibility(visibility:boolean) {
    this.visibility = visibility;
    this.ensureElementsAreCollected();
    this.updateListCoords();

    this.listContainerElement.style.visibility = visibility ? "visible" : "hidden";
    this.listContainerElement.classList.remove('visible');
    this.listContainerElement.classList.remove('hidden');
    this.listContainerElement.classList.add(visibility ? 'visible' : 'hidden');
  }

  updateListCoords() {
    this.ensureElementsAreCollected();

    this.listContainerElement.style.left = this.textboxElement.getBoundingClientRect().left + "px";
    this.listContainerElement.style.width = this.textboxElement.clientWidth + "px";
    this.listContainerElement.style.top = this.textboxElement.getBoundingClientRect().top + this.textboxElement.clientHeight + 3 + "px";
  }

  coordsAreWithinBoundingRect(x:number, y:number) {
    this.ensureElementsAreCollected();

    if (this.textboxElement && this.listContainerElement) {
      let boxX1 : number = this.textboxElement.getBoundingClientRect().left;
      let boxY1 : number = this.textboxElement.getBoundingClientRect().top;
      let boxX2 : number = this.buttonElement.getBoundingClientRect().right;
      let boxY2 : number = this.listContainerElement.getBoundingClientRect().bottom;

      if (boxX1 <= x && x < boxX2 && boxY1 <= y && y <= boxY2) {
        return true;
      }
    }

    return false;
  }

  private ensureElementsAreCollected() {
    if (this.listContainerElement == null || this.listContainerElement == undefined) {
      this.listContainerElement = <any>document.getElementById(this.getListContainerId());
    }
    if (this.textboxElement == null || this.textboxElement == undefined) {
      this.textboxElement = <any>document.getElementById(this.getTextboxId());
    }

    if (this.buttonElement == null || this.buttonElement == undefined) {
      this.buttonElement = <any>document.getElementById(this.getButtonId());
    }
  }

  onItemSelectionChanged(selectedItem:any) {
    this.selectedItem = selectedItem;
    this.selectedItemChange.emit(selectedItem);
    this.onSelectionChanged.emit(selectedItem);
    this.setListVisibility(false);
    this.validate();
  }

  validate() {
    let validationMessage : string = this.validationFunction(this.selectedItem);
    this.validationService.setValidationMessage(this.getTextboxId(), validationMessage);
    this.isValid = validationMessage ? false : true;
  }
}
