import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgIconComponent } from './icon.component';

describe('LiteNgIconComponent', () => {
  let component: LiteNgIconComponent;
  let fixture: ComponentFixture<LiteNgIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
