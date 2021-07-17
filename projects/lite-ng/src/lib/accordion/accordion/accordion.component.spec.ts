import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgAccordionComponent } from './accordion.component';

describe('LiteNgAccordionComponent', () => {
  let component: LiteNgAccordionComponent;
  let fixture: ComponentFixture<LiteNgAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteNgAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
