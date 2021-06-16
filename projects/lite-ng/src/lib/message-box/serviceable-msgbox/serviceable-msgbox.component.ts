import { Component, OnInit } from '@angular/core';
import { LiteNgMsgboxService } from '../msgbox.service';

@Component({
  selector: 'lite-ng-serviceable-msgbox',
  templateUrl: './serviceable-msgbox.component.html',
  styleUrls: ['./serviceable-msgbox.component.css']
})
export class LiteNgServiceableMsgboxComponent implements OnInit {

  constructor(public msgBoxService:LiteNgMsgboxService) { }

  ngOnInit() {
  }

}
