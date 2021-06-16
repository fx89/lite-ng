import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgSwitchComponent } from './switch.component';

describe('LiteNgSwitchComponent', () => {
  let component: LiteNgSwitchComponent;
  let fixture: ComponentFixture<LiteNgSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
