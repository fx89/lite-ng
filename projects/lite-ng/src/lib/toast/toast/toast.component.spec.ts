import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgToastComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: LiteNgToastComponent;
  let fixture: ComponentFixture<LiteNgToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
