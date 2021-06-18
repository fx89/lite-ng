import { Injectable } from '@angular/core';
import { LiteNgLoadingModalService } from '../loading-modal/loading-modal.service';
import { LiteNgToastService } from '../toast/toast.service';
import { LiteNgHttpClientWrapperService } from './http-client-wrapper.service';
import { LiteNgHttpRepository } from './http-repository';
import { LiteNgLoadingModalWrappedHttpRepository } from './loading-modal-wrapped-http-repository';

@Injectable({
  providedIn: 'root'
})
export class LiteNgHttpRepositoryFactoryService {

  constructor(
      private httpClient : LiteNgHttpClientWrapperService,
      private loadingModal : LiteNgLoadingModalService,
      private toast : LiteNgToastService
  ) { }

  public newHttpRepository(baseURL : string) : LiteNgHttpRepository {
    return new LiteNgHttpRepository(this.httpClient, baseURL);
  }

  public newLoadingModalWrappedHttpRepository(
      baseURL : string,
      loadingModalTitle : string = "PROCESSING",
      loadingModalSubtitle : string = "please be patient"
  ) : LiteNgLoadingModalWrappedHttpRepository
  {
    return new LiteNgLoadingModalWrappedHttpRepository(
        this.loadingModal,
        this.toast,
        this.httpClient,
        baseURL,
        loadingModalTitle,
        loadingModalSubtitle
    );
  }
}
