import { Component, Input, OnInit } from '@angular/core';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'lite-ng-tab',
  templateUrl: './lite-ng-tab.component.html',
  styleUrls: ['./lite-ng-tab.component.css']
})
export class LiteNgTabComponent implements OnInit {

  @Input()
  id : string = "_" + uuid();

  constructor() { }

  ngOnInit(): void {
  }

  getTabContainerId() : string {
    return this.id + "_tab_container";
  }

  getInnerContainerId() : string {
    return this.id + "_tab_container";
  }

}
