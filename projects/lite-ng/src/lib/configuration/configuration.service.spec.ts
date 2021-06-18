import { TestBed } from '@angular/core/testing';

import { LiteNgConfigurationService } from './configuration.service';

describe('LiteNgConfigurationService', () => {
  let service: LiteNgConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiteNgConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
