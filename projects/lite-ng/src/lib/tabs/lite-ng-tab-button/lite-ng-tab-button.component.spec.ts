import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgTabButtonComponent } from './lite-ng-tab-button.component';

describe('LiteNgTabButtonComponent', () => {
  let component: LiteNgTabButtonComponent;
  let fixture: ComponentFixture<LiteNgTabButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteNgTabButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgTabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
