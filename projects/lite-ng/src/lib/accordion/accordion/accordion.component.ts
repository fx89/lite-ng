import { Component, Input, Output, ContentChildren, QueryList, EventEmitter, AfterViewInit } from '@angular/core';
import { LiteNgAccordionSectionComponent } from '../accordion-section/accordion-section.component';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'lite-ng-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class LiteNgAccordionComponent implements AfterViewInit {

  @Input()
  id : string = "_" + uuid();

  @ContentChildren(LiteNgAccordionSectionComponent)
  sections! : QueryList<LiteNgAccordionSectionComponent>;

  @Output()
  onSelectionChanged : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngAfterViewInit() {
    this.sections.forEach(section => {
      section.onClick.subscribe((clickedSection:LiteNgAccordionSectionComponent) => {
        this.sections.forEach(sect => {
          sect.isSelected = (sect.id == clickedSection.id) ? (!sect.isSelected) : false;
        });
        this.onSelectionChanged.emit();
      });
    });
  }
}
