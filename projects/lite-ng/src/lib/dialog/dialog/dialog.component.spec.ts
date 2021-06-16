import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgDialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: LiteNgDialogComponent;
  let fixture: ComponentFixture<LiteNgDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
