import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { LiteNgTabsLogic } from '../tabs-logic';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'lite-ng-tabs-vertical',
  templateUrl: './lite-ng-tabs-vertical.component.html',
  styleUrls: ['./lite-ng-tabs-vertical.component.css']
})
export class LiteNgTabsVerticalComponent implements AfterViewInit {

  private tabsLogic : LiteNgTabsLogic = new LiteNgTabsLogic();

  @Input()
  id : string = "_" + uuid();

  @Input()
  extraClass : string = "default-tabs";

  @Input()
  isSetOfDrawers : boolean = false;

  @Input()
  lengthPX : number = <any>undefined;

  constructor() { }

  @Input()
  activeTabIndex : Number = -1;

  @Output()
  activeTabIndexChange : EventEmitter<Number> = new EventEmitter<Number>();

  ngAfterViewInit(): void {
    this.tabsLogic.initTabs(this.isSetOfDrawers, this.getContainerId(), true, this.getBodyId(), this.activeTabIndex, this.activeTabIndexChange);
  }

  getContainerId() : string {
    return this.id + "_tabs_container";
  }

  getBodyId() : string {
    return this.id + "_body";
  }

  getFooterId() : string {
    return this.id + "_footer";
  }

  getContainerClasses() : string {
    return this.extraClass + " tabs-container";
  }

}
