import { Component, EventEmitter, Input, Output, OnInit, AfterViewInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { LiteNgValidationService } from '../../validation/validation.service';

@Component({
  selector: 'lite-ng-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class LiteNgDialogComponent implements AfterViewInit {
  @Input()
  id : string = "_" + uuid();

  @Input()
  title : string = <any>null;

  @Input()
  customButtons : DialogButtonSpec[] = [];

  @Input()
  okButtonText : string = "Ok";

  @Input()
  cancelButtonText : string = "Cancel";

  @Input()
  isModal : boolean = true;

  @Input()
  widthPX : number = 300;

  @Input()
  heightPX : number = 200;

  @Input()
  showEvent : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  hideEvent : EventEmitter<any> = new EventEmitter<any>();

  @Output()
  okEvent : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  okCallback : Function = () => {}

  @Output()
  cancelEvent : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  cancelCallback : Function = () => {}

  @Input()
  hideAllowedFunction : Function = () => true;

  @Input()
  triggerOkIfInvalid : boolean = false;

  @Input()
  triggerCancelIfInvalid : boolean = true;

  @Input()
  showValidationMessages : boolean = true;

  @Input()
  validationMessageLifeSecs : number = 3;

  @Input()
  showOkButton : boolean = true;

  @Input()
  showCancelButton : boolean = true;

  @Input()
  okButtonEnabled : Function = () => true;

  @Input()
  externalValidationMessageEvent : EventEmitter<string> = new EventEmitter<string>();

  private containedElementIds : string[] = [];

  public firstValidationMessage : string = <any>null;

  private validationTimer : any;

  private dialogFrameComponent : HTMLElement = <any>null;

  constructor(private validationService : LiteNgValidationService) { }

  ngAfterViewInit() {
    this.dialogFrameComponent = <any>document.getElementById(this.getDialogFrameId());

    // Subscribe to the SHOW event
    this.showEvent.subscribe(() => {
      this.showDialog();
    });

    // Collect the id's of the contained elements
    this.collectContainedElementIds();

    // Make sure the dialog remains centered on the page
    this.centerComponent(this.dialogFrameComponent);
    window.addEventListener("resize", () => {
      this.centerComponent(this.dialogFrameComponent);
    });

    // Subscribe to the hide event
    this.hideEvent.subscribe(() => {
      this.hideDialog();
    });

    // Subscribe to the external validation message event
	this.externalValidationMessageEvent.subscribe(validationMessage => {
      this.showValidationMessage(validationMessage);
	});
  }

  private collectContainedElementIds() {
    this.containedElementIds
      = this.validationService.collectContainedElementIds(this.getDialogContentId());
  }

  getDialogFrameId() : string {
    return this.id + "_dialog_frame";
  }

  getDialogModalCoverId() : string {
    return this.id + "_dialog_modal_cover";
  }

  getDialogContentId() : string {
    return this.id + "_dialog_content";
  }

  private centerComponent(component : any) : void {
    if (component) {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

      component.style.left = ((vw - this.widthPX) / 2) + "px";
      component.style.top = ((vh - this.heightPX) / 2) + "px";
    }
  }

  private setDialogVisibility(visibility: string, centerFrame: boolean = true) {
    // Compute the fade class name, for animations
    const fadeClassName : string = visibility == 'visible' ? 'faded-in' : 'faded-out';

    // Show the dialog modal cover (if the dialog is modal)
    if (this.isModal) {
      let dialogModalCoverComponent = document.getElementById(this.getDialogModalCoverId());
      if (dialogModalCoverComponent) {
        dialogModalCoverComponent.classList.remove('faded-in');
        dialogModalCoverComponent.classList.remove('faded-out');
        dialogModalCoverComponent.classList.add(fadeClassName);
        dialogModalCoverComponent.style.visibility = visibility;
      }
    }

    // Show and center the dialog
    if (this.dialogFrameComponent) {
      if (centerFrame) {
        setTimeout(() => { this.centerComponent(this.dialogFrameComponent); }, 100);
      }
      this.dialogFrameComponent.classList.remove('faded-in');
      this.dialogFrameComponent.classList.remove('faded-out');
      this.dialogFrameComponent.classList.add(fadeClassName);
      this.dialogFrameComponent.style.visibility = visibility;
    }
  }

  showDialog() {
    this.checkValidation();
    this.setDialogVisibility("visible");
  }

  hideDialog() {
    this.setDialogVisibility("hidden", false);
  }

  okButtonClicked() {
    if (this.okButtonEnabled()) {
      if (this.triggerOkIfInvalid || this.checkValidation()) {
        this.firstValidationMessage = <any>null;

        this.okEvent.emit();
        this.okCallback();

        if (this.hideAllowedFunction()) {
          this.hideDialog();
        }
      } else {
        this.showValidationMessage(
          this.validationService.getFirstValidationMessage(this.containedElementIds)
        );
      }
    }
  }

  cancelButtonClicked() {
    if (this.triggerCancelIfInvalid || this.checkValidation()) {

      this.cancelEvent.emit();
      this.cancelCallback();

      if (this.hideAllowedFunction()) {
        this.hideDialog();
      }
    }
  }

  private showValidationMessage(validatonMessage : string) {
    this.firstValidationMessage = validatonMessage;

    if (this.validationTimer) {
      clearTimeout(this.validationTimer);
    }

    this.validationTimer = setTimeout(() => { this.firstValidationMessage = <any>null; }, this.validationMessageLifeSecs * 1000);
  }

  private checkValidation() : boolean {
    this.collectContainedElementIds();
    return this.validationService.areComponentsValid(this.containedElementIds);
  }
}

export class DialogButtonSpec {
  constructor(
    public text : string = "Ok",
    public onClick : Function = () => {}
  ){}
}