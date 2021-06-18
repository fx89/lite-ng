import { EventEmitter } from '@angular/core';
import { LiteNgHttpClientWrapperService, RequestType } from './http-client-wrapper.service';
import { Observable } from 'rxjs';

export class LiteNgHttpRepository {

    public errorEventEmitter : EventEmitter<any> = new EventEmitter<any>();
  
    constructor(
      private client : LiteNgHttpClientWrapperService,
      private baseURL: string
    ) { }
  
    public getCustomOperation(operationName: string, params?: Map<string, string>) : Observable<any> {
      return this.requestCustomOperation(RequestType.GET, operationName, null, params);
    }
  
    public saveCustomOperation(operationName: string, body: any, params?: Map<string, string>) : Observable<any> {
      return this.requestCustomOperation(RequestType.POST, operationName, body, params);
    }
  
    public deleteCustomOperation(operationName: string, body: any, params?: Map<string, string>) : Observable<any> {
      return this.requestCustomOperation(RequestType.DELETE, operationName, body, params);
    }
  
    private requestCustomOperation(
      requestType: RequestType,
      operationName: string,
      body?: any,
      params?: Map<string, string>
    ) : Observable<any>
    {
      return this.client.requestWithErrorHandling(
        requestType,
        this.baseURL + "/" + operationName,
        body,
        this.errorEventEmitter,
        params
      );
    }
  }