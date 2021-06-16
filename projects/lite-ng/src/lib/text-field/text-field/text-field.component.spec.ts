import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgTextFieldComponent } from './text-field.component';

describe('LiteNgTextFieldComponent', () => {
  let component: LiteNgTextFieldComponent;
  let fixture: ComponentFixture<LiteNgTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
