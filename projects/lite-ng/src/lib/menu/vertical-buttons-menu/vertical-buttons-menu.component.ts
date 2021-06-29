import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { LiteNgMenuButtonDefinition } from '../menu-button-definition';

@Component({
  selector: 'lite-ng-vertical-buttons-menu',
  templateUrl: './vertical-buttons-menu.component.html',
  styleUrls: ['./vertical-buttons-menu.component.css']
})
export class LiteNgVerticalButtonsMenuComponent implements OnInit {

  @Input()
  title : string = "";

  @Input()
  bttons : LiteNgMenuButtonDefinition[] = [];

  @Input()
  isModal : boolean = false;

  @Input()
  widthPX : number = 200;

  @Input()
  heightPX : number = 400;

  @Input()
  buttonWidthPX : number = 180;

  @Input()
  buttonHeightPX : number = 17;

  @Input()
  showEvent : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  hideEvent : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  closeButtonText : string = "Close";

  constructor() { }

  ngOnInit(): void {
  }

  clickMenuButton(btn : LiteNgMenuButtonDefinition) {
    if (btn && btn.action) {
      btn.action();
    }
  }
}
