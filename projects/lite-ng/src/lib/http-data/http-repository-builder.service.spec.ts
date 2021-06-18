import { TestBed } from '@angular/core/testing';

import { LiteNgHttpRepositoryFactoryService } from './http-repository-factory.service';

describe('LiteNgHttpRepositoryFactoryService', () => {
  let service: LiteNgHttpRepositoryFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiteNgHttpRepositoryFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
