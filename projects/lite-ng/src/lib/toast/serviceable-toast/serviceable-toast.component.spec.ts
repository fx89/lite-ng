import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgServiceableToastComponent } from './serviceable-toast.component';

describe('LiteNgServiceableToastComponent', () => {
  let component: LiteNgServiceableToastComponent;
  let fixture: ComponentFixture<LiteNgServiceableToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgServiceableToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgServiceableToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
