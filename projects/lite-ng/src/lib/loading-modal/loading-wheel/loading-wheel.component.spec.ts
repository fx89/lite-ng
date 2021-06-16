import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgLoadingWheelComponent } from './loading-wheel.component';

describe('LoadingWheelComponent', () => {
  let component: LiteNgLoadingWheelComponent;
  let fixture: ComponentFixture<LiteNgLoadingWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgLoadingWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgLoadingWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
