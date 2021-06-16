import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'lite-ng-msgbox',
  templateUrl: './msgbox.component.html',
  styleUrls: ['./msgbox.component.css']
})
export class LiteNgMsgboxComponent implements OnInit {

  @Input()
  title : string = "Message";

  @Input()
  message : string = "Do you want?";

  @Input()
  widthPX : number = 100;

  @Input()
  heightPX : number = 30;

  @Input()
  hasTwoButtons : boolean = false;

  @Input()
  okButtonText : string = "Ok";

  @Input()
  cancelButtonText : string = "No";

  @Input()
  showEvent : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  okCallback : Function = () => {}

  @Input()
  cancelCallback : Function = () => {}

  constructor() { }

  ngOnInit() {
  }

}
