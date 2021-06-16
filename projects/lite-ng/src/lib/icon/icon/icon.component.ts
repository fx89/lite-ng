import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { getSkinName } from '../../skin-utils';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'lite-ng-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class LiteNgIconComponent implements OnInit {
  @Input()
  id : string = "_" + uuid();

  @Input()
  picture : string = <any>undefined;

  @Input()
  text : string = "icon text"

  @Input()
  href : string  = <any>undefined;

  @Input()
  altPictureSrc : string = "assets/skins/" + getSkinName() + "/icons/x.png";

  @Input()
  hasFrame : boolean = true;

  @Input()
  selected : boolean = false;

  @Input()
  hoverable : boolean = false;
  
  @Output()
  onClick : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  paddingPX : number = <any>undefined;

  constructor() { }

  ngOnInit() {
  }

  getImgId() : string {
    return this.id + "_img";
  }

  imgLoadError($event : any) {
    (<any>document.getElementById(this.getImgId())).src = this.altPictureSrc;
  }

  onImgClicked() {
    this.onClick.emit();
  }

}
