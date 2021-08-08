import { EventEmitter } from '@angular/core';

export class LiteNgTabsLogic {

    private visibleTabIndex : Number = -1;

    constructor() {}

    public initTabs(isSetOfDrawers : boolean, containerId : string, isVertical : boolean, bodyId : string, activeTabIndex : Number, activeTabIndexChange : EventEmitter<Number>) : void {
      // Init tabs visiblility
	  this.visibleTabIndex = activeTabIndex;
      this.forEachTab(containerId, (tab : HTMLElement, n : number) => {
        if (!isSetOfDrawers && n == activeTabIndex) {
          this.setTabVisibility(tab, true);
        } else {
          this.setTabVisibility(tab, false);
        }
      });
  
      // Set up the click events and eventual styles on buttons
      this.forEachButton(containerId, (button : HTMLElement, n : number) => {
        // Add the "tab button" and "not selected" class
        button.classList.add("tab-button");
        if (n == activeTabIndex) {
            button.classList.add("tab-button-selected");
        } else {
            button.classList.add("tab-button-not-selected");
        }

        // Set up the click event for the button
        button.onclick = () => {
          this.clickTab(n, isSetOfDrawers, containerId);
          this.forEachButton(containerId, (btn : HTMLElement, btnIdx : number) => {
            btn.classList.remove("tab-button-selected", "tab-button-not-selected");
            btn.classList.add((btnIdx == n && this.visibleTabIndex != -1) ? "tab-button-selected" : "tab-button-not-selected");
          });
		  activeTabIndexChange.emit(n);
        }

        // If the layout is vertical, then make the button flow vertically
        if (isVertical) {
          button.style.display = "block";
        }
      });
  
      // Set up the size of the tabs row/column, depending on whether or not this is a set of drawers
      if (isSetOfDrawers) {
        let elm : HTMLElement = <HTMLElement>document.querySelector("#" + bodyId);
        if (isVertical) {
          elm.style.width = "0px";
        } else {
          elm.style.height = "0px";
        }
      }
    }

    private setTabVisibility(tab : HTMLElement, visible : boolean) {
        if (visible) {
          tab.style.position = "relative";
          tab.style.visibility = "visible";
          tab.style.width = "100%";
          tab.style.height = "100%";
          tab.classList.add("faded-in");
        } else {
          tab.style.position = "absolute";
          tab.style.visibility = "hidden";
          tab.style.width = "0";
          tab.style.height = "0";
          tab.classList.remove("faded-in");

        }
      }
    
      private clickTab(tabIndex : number, isSetOfDrawers : boolean, containerId : string) {
        this.forEachTab(containerId, (tab : HTMLElement, n : number) => {
          // Set tabs visibility
          this.setTabVisibility(tab, n == tabIndex);
    
          // If it's a set of drawers and the clicked tab is already open, then close it
          // and note that there's no more tab visible, otherwise, just set the visible tab
          // index so it can be referenced upon the next click.
          if (n == tabIndex) {
            if (isSetOfDrawers && tabIndex == this.visibleTabIndex) {
              this.setTabVisibility(tab, false);
              this.visibleTabIndex = -1;
            } else {
              this.visibleTabIndex = tabIndex;
            }
          }
          
        });
      }
    
      private forEachTab(containerId :string, action : Function) {
        let e : HTMLElement = <HTMLElement>document.querySelector("#" + containerId);
        let n : number = 0;
        e.querySelectorAll("[lite-ng-tab-container]").forEach(tab => {
          action(tab, n);
          n++;
        });
      }
    
      private forEachButton(containerId :string, action : Function) {
        let e : HTMLElement = <HTMLElement>document.querySelector("#" + containerId);
        let n : number = 0;
        e.querySelectorAll("[lite-ng-tab-button]").forEach(button => {
          action(button, n);
          n++;
        });
      }
}