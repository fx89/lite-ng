import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgDropdownListComponent } from './dropdown-list.component';

describe('LiteNgDropdownListComponent', () => {
  let component: LiteNgDropdownListComponent;
  let fixture: ComponentFixture<LiteNgDropdownListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgDropdownListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
