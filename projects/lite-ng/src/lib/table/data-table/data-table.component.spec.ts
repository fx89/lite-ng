import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgDataTableComponent } from './data-table.component';

describe('LiteNgDataTableComponent', () => {
  let component: LiteNgDataTableComponent;
  let fixture: ComponentFixture<LiteNgDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
