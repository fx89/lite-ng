import { Input, Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { LiteNgTabsLogic } from '../tabs-logic';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'lite-ng-tabs-horizontal',
  templateUrl: './lite-ng-tabs-horizontal.component.html',
  styleUrls: ['./lite-ng-tabs-horizontal.component.css']
})
export class LiteNgTabsHorizontalComponent implements AfterViewInit {

  private tabsLogic : LiteNgTabsLogic = new LiteNgTabsLogic();

  @Input()
  id : string = "_" + uuid();

  @Input()
  extraClass : string = "default-tabs";

  @Input()
  isSetOfDrawers : boolean = false;

  @Input()
  lengthPX : number = <any>undefined;

  @Input()
  activeTabIndex : Number = -1;

  @Output()
  activeTabIndexChange : EventEmitter<Number> = new EventEmitter<Number>();

  constructor() { }

  ngAfterViewInit(): void {
    this.tabsLogic.initTabs(this.isSetOfDrawers, this.getContainerId(), false, this.getBodyId(), this.activeTabIndex, this.activeTabIndexChange);
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


