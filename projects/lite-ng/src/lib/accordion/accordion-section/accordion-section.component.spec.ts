import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgAccordionSectionComponent } from './accordion-section.component';

describe('AccordionSectionComponent', () => {
  let component: LiteNgAccordionSectionComponent;
  let fixture: ComponentFixture<LiteNgAccordionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteNgAccordionSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgAccordionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
