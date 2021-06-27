import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgTabsHorizontalComponent } from './lite-ng-tabs-horizontal.component';

describe('LiteNgTabsHorizontalComponent', () => {
  let component: LiteNgTabsHorizontalComponent;
  let fixture: ComponentFixture<LiteNgTabsHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteNgTabsHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgTabsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
