import { Component, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { LiteNgLoadingModalService } from '../loading-modal.service';

@Component({
  selector: 'lite-ng-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.css']
})
export class LiteNgLoadingModalComponent implements AfterViewInit {

  @Input()
  id : string = "_" + uuid();

  @Input()
  stateEvent : EventEmitter<boolean> = new EventEmitter<boolean>();

  private modalCoverElement : HTMLElement | any;

  private modalFormElement : HTMLElement | any;

  public svc : LiteNgLoadingModalService;

  constructor(svc : LiteNgLoadingModalService) { 
    this.svc = svc;
  }

  ngAfterViewInit() {
    this.modalCoverElement = document.getElementById(this.getModalCoverId());
    this.modalFormElement = document.getElementById(this.getCenterFormId());

    this.stateEvent.subscribe((isVisible) => {
      this.handleShowHide(isVisible);
    });

    this.svc.stateEvent.subscribe((isVisible) => {
      this.handleShowHide(isVisible);
    });
  }

  getModalCoverId() : string {
    return this.id + "_modal_cover";
  }

  getCenterFormId() : string {
    return this.id + "_center_form";
  }

  private handleShowHide(isVisible : boolean) {
    if (this.modalCoverElement) {
      this.modalCoverElement.style.visibility = isVisible ? "visible" : "hidden";
      this.svc.status = isVisible;
    }

    if (this.modalFormElement) {
      this.modalFormElement.style.visibility = isVisible ? "visible" : "hidden";
      this.svc.status = isVisible;
    }
  }
}
