import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgServiceableMsgboxComponent } from './serviceable-msgbox.component';

describe('ServiceableMsgboxComponent', () => {
  let component: LiteNgServiceableMsgboxComponent;
  let fixture: ComponentFixture<LiteNgServiceableMsgboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgServiceableMsgboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgServiceableMsgboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
