import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgTabsVerticalComponent } from './lite-ng-tabs-vertical.component';

describe('LiteNgTabsVerticalComponent', () => {
  let component: LiteNgTabsVerticalComponent;
  let fixture: ComponentFixture<LiteNgTabsVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteNgTabsVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgTabsVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
