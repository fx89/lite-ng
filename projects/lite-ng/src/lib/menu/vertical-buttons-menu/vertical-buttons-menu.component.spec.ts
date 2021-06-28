import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalButtonsMenuComponent } from './vertical-buttons-menu.component';

describe('VerticalButtonsMenuComponent', () => {
  let component: VerticalButtonsMenuComponent;
  let fixture: ComponentFixture<VerticalButtonsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalButtonsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalButtonsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
