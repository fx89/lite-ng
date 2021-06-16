import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LiteNgValidationService {

  private validationMessages : any[] = [];

  constructor() { }

  public getValidationMessage(componentId:string) : string {
    return this.validationMessages[<any>componentId];
  }

  public setValidationMessage(componentId:string, validationMessage:string) {
    this.validationMessages[<any>componentId] = validationMessage;
  }

  public clearValidationMessage(componentId:string) {
    this.validationMessages[<any>componentId] = undefined;
  }

  public clearValidationMessages(componentIds:string[]) {
    for (let cid of componentIds) {
      this.clearValidationMessage(cid);
    }
  }

  public isComponentValid(componentId:string) : boolean {
    return this.validationMessages[<any>componentId] ? false : true;
  }

  public areComponentsValid(componentIds:string[]) : boolean {
    if (componentIds) {
      for (let componentId of componentIds) {
        if (this.isComponentValid(componentId) == false) {
          return false;
        }
      }
    }

    return true;
  }

  public getFirstValidationMessage(componentIds:string[]) : string {
    if (componentIds) {
      for (let componentId of componentIds) {
        let validationMessage : string = this.getValidationMessage(componentId);

        if (validationMessage) {
          return validationMessage;
        }
      }
    }

    return <any>null;
  }

  public collectContainedElementIds(parentId : string) : string[] {
    const containedElementIds : string[] = [];
    let dialogContentElement = document.getElementById(parentId);
    if (dialogContentElement) {
      let childNodes : HTMLCollection = dialogContentElement.getElementsByTagName('*');
      for (let i = 0; i < childNodes.length; i++) {
        let childNodeId = childNodes[i].id;
        if (childNodeId) {
          containedElementIds.push(childNodeId);
        }
      }
    }
    return containedElementIds;
  }
}
