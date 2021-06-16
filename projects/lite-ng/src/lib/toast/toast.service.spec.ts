import { TestBed } from '@angular/core/testing';

import { LiteNgToastService } from './toast.service';

describe('LiteNgToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiteNgToastService = TestBed.get(LiteNgToastService);
    expect(service).toBeTruthy();
  });
});
