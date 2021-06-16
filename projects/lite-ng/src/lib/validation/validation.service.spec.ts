import { TestBed } from '@angular/core/testing';

import { LiteNgValidationService } from './validation.service';

describe('LiteNgValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiteNgValidationService = TestBed.get(LiteNgValidationService);
    expect(service).toBeTruthy();
  });
});
