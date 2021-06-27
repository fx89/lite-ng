import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgTabComponent } from './lite-ng-tab.component';

describe('LiteNgTabComponent', () => {
  let component: LiteNgTabComponent;
  let fixture: ComponentFixture<LiteNgTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteNgTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
