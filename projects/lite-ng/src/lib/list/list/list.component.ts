import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'lite-ng-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class LiteNgListComponent implements OnInit {

  @Input()
  id : string = "_" + uuid();

  @Input()
  widthPX : number = <any>null;

  @Input()
  widthPCT : number = <any>null;

  @Input()
  heightPX : number = 200;

  @Input()
  rowType: string = "card"; // Possible values: card, compact

  @Input()
  selectable: boolean = true;

  @Input()
  noDataMessage : string = "No data"

  @Input()
  items : any[] = [];

  @Input()
  selectedItem : any;

  @Output()
  selectedItemChange : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  iconFunction : Function = () => "";

  @Input()
  titleFunction: Function = (item : any) => item.toString();

  @Input()
  descriptionFunction: Function = () => "";

  @Input()
  showIcons : boolean = true;

  @Output()
  onClick : EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onSelectionChanged : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  itemClicked(item : any) {
    if (this.selectable) {
      this.selectedItem = item;
      this.selectedItemChange.emit(this.selectedItem);
      this.onSelectionChanged.emit(this.selectedItem);
    }

    this.onClick.emit(item);
  }

  itemsListIsEmpty() : boolean {
    return this.items && this.items.length > 0 ? false : true;
  }
}
