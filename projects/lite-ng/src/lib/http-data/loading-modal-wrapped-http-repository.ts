import { EventEmitter } from '@angular/core';
import { LiteNgLoadingModalService } from '../loading-modal/loading-modal.service';
import { LiteNgToastService } from '../toast/toast.service';
import { LiteNgHttpClientWrapperService } from './http-client-wrapper.service';
import { LiteNgHttpRepository } from './http-repository';

export class LiteNgLoadingModalWrappedHttpRepository extends LiteNgHttpRepository {

    constructor(
        private loadingModalService : LiteNgLoadingModalService,
        private toastService : LiteNgToastService,
        client : LiteNgHttpClientWrapperService,
        baseURL: string,
        private loadingModalTitle : string = "LOADING",
        private loadingModalSubtitle : string = "please be patient",
        private redirectDecision : Function = () => false,
        private redirectUrl : string = ""
    ) {
        super(client, baseURL);

        this.errorEventEmitter
            .subscribe((err) => {
                this.toastService.showError(err.error, err.message);
                this.loadingModalService.hide();
            });
    }

    public getCustomOperationWithLoadingModal(
        operationName           : string,
        params?                 : Map<string, string>,
        resultHandler?          : Function
    ) : EventEmitter<any>
    {
        return this.loadingModalService.envelopOperation(
            () => this.getCustomOperation(operationName, params),
            this.createResultHandler(<any>resultHandler),
            this.loadingModalTitle,
            this.loadingModalSubtitle
        );
    }

    public saveCustomOperationWithLoadingModal(
        operationName           : string,
        body                    : any,
        params?                 : Map<string, string>,
        resultHandler?          : Function
    ) : EventEmitter<any> {
        return this.loadingModalService.envelopOperation(
            () => this.saveCustomOperation(operationName, body, params),
            this.createResultHandler(<any>resultHandler),
            this.loadingModalTitle,
            this.loadingModalSubtitle
        );
      }
    
      public deleteCustomOperationWithLoadingModal(
        operationName           : string,
        body                    : any,
        params?                 : Map<string, string>,
        resultHandler?          : Function
      ) : EventEmitter<any> {
        return this.loadingModalService.envelopOperation(
            () => this.deleteCustomOperation(operationName, body, params),
            this.createResultHandler(<any>resultHandler),
            this.loadingModalTitle,
            this.loadingModalSubtitle
        );
      }

      private createResultHandler(resultHandler:Function) : Function  {
          return (ret:any) => {
            if (this.redirectDecision(ret) == true) {
                window.location.replace(this.redirectUrl);
            } else {
                if (resultHandler != null && resultHandler != undefined) {
                    resultHandler(ret);
                }
            } 
          }
      }
}