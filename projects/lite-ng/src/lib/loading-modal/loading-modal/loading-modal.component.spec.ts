import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteNgLoadingModalComponent } from './loading-modal.component';

describe('LoadingModalComponent', () => {
  let component: LiteNgLoadingModalComponent;
  let fixture: ComponentFixture<LiteNgLoadingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteNgLoadingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteNgLoadingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
