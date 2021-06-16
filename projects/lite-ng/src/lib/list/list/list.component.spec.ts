import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgListComponent } from './list.component';

describe('LiteNgListComponent', () => {
  let component: LiteNgListComponent;
  let fixture: ComponentFixture<LiteNgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
