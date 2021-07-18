import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'lite-ng-accordion-section',
  templateUrl: './accordion-section.component.html',
  styleUrls: ['./accordion-section.component.css']
})
export class LiteNgAccordionSectionComponent implements OnInit {

  @Input()
  id : string = "_" + uuid();

  @Input()
  title : string = "New accordion section";

  @Input()
  isSelected : boolean = false;

  @Input()
  isDeselected : boolean = false;

  onClick : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onCompoundDivClicked() {
    this.onClick.emit(this);
  }
}
