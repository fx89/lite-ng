import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgPushbuttonComponent } from './pushbutton.component';

describe('PushbuttonComponent', () => {
  let component: LiteNgPushbuttonComponent;
  let fixture: ComponentFixture<LiteNgPushbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgPushbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgPushbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
