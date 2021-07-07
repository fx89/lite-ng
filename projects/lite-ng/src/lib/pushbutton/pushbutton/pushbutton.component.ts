import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'lite-ng-pushbutton',
  templateUrl: './pushbutton.component.html',
  styleUrls: ['./pushbutton.component.css']
})
export class LiteNgPushbuttonComponent implements OnInit {

  @Input()
  widthPX : number = 70;

  @Input()
  heightPX : number = 17;

  @Input()
  enabled : boolean = true;

  @Input()
  icon : string = <any>null;

  @Input()
  text : string = "Ok";

  @Input()
  additionalClass : string = "";

  @Output()
  onClick : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  buttonClicked($event : any) {
    if (this.enabled) {
      this.onClick.emit($event);
    }
  }

  getClassNames() : string {
	  return "pushbutton " + this.additionalClass;
  }
}
