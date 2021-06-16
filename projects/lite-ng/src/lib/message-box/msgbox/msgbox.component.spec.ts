import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgMsgboxComponent } from './msgbox.component';

describe('LiteNgMsgboxComponent', () => {
  let component: LiteNgMsgboxComponent;
  let fixture: ComponentFixture<LiteNgMsgboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgMsgboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgMsgboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
