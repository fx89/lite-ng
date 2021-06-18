import { TestBed } from '@angular/core/testing';

import { LiteNgHttpClientWrapperService } from './http-client-wrapper.service';

describe('LiteNgHttpClientWrapperService', () => {
  let service: LiteNgHttpClientWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiteNgHttpClientWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
