import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiteNgLoadingModalService {

  public stateEvent : EventEmitter<boolean> = new EventEmitter<boolean>();

  public title : string = "LOADING";

  public subtitle : string = "please be patient";

  public status : boolean = false;

  /**
   * Prevent flickering of the loading modal in case the operation
   * does not take a long enough time to warant showing any loading message
   */
  public showDelayMS : number = 300;

  /**
   * Prevent hiding the loading moal just so it can be shown again,
   * in case of chained operations which require displaying the loading modal
   * 
   * !!! THIS VALUE SHOULD ALWAYS BE GREATER THAN [showDelayMS] !!!
   */
  public hideDelayMS : number = 500;

  constructor() { }

  public show(title?:string, subtitle?:string) {
    if (title) {
      this.title = title;
    }

    if (subtitle) {
      this.subtitle = subtitle;
    }

    // Set the status to TRUE
    this.status = true;

    // After a delay of showDelayMS
    setTimeout(() => {
      // If the status is still TRUE (i.e. hasn't been made FALSE by some call to hide()),
      // then show the loading modal
      if (this.status == true) {
        this.stateEvent.emit(true);
      }
    }, this.showDelayMS);

  }

  public hide() {
    // Set the status to false
    this.status = false;

    // After a delay of hideDelayMS
    setTimeout(() => {
      // If the status is still false (i.e. hasn't been made TRUE by some call to show()),
      // then hide the loading modal
      if (this.status == false) {
        this.stateEvent.emit(false);
      }
    }, this.hideDelayMS);
  }

  /**
   * The aim of this method is to display the loading modal while executing the enveloped operation.
   * The use case for which this was designed is execution of API calls to the back-end.
   * 
   * @param operation Enveloped operation - should return an Observable (i.e. EventEmitter<any>)
   * @param operationResultHandler Optional code to handle the value returned by the enveloped operation - i.e. (ret:any) => doSomethingWith(ret)
   * @param loadingModalTitle Optional title for the loading modal - if missing, the previous value will be used
   * @param loadingModalSubtitle Optional subtitle for the loading modal - if missing, the previous value will be used
   * @param hideLoadingModalWhenDone TRUE/FALSE - whether or not to hide the loading modal when done - default TRUE
   */
  public envelopOperation(
      operation                : Function,
      operationResultHandler?  : Function,
      loadingModalTitle?       : string,
      loadingModalSubtitle?    : string,
      hideLoadingModalWhenDone : boolean = true
  ) : EventEmitter<any>
  {
      // Prepare the event emitter
      const doneEvent : EventEmitter<any> = new EventEmitter<any>();

      // If the title or subtitle are not provided, use the previous ones
      const title : string = loadingModalTitle ? loadingModalTitle : this.title;
      const subtitle : string = loadingModalSubtitle ? loadingModalSubtitle : this.subtitle;

      // Show the loading modal with the required title and subtitle
      this.show(title, subtitle);
  
      // Begin executing the enveloped operation
      operation().subscribe((ret : any) => {
        // Call the operation result handler upon completion of the operation (if any)
        if (operationResultHandler) {
          operationResultHandler(ret);
        }

        // Emit the DONE event
        doneEvent.emit();

        // Hide the loading modal after handling the operation result, if so requested
        if (hideLoadingModalWhenDone) {
          this.hide();
        }
      });
  
      // return the event emitter
      return doneEvent;
  }
}
