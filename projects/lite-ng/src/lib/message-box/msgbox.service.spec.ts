import { TestBed } from '@angular/core/testing';

import { LiteNgMsgboxService } from './msgbox.service';

describe('MsgboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiteNgMsgboxService = TestBed.get(LiteNgMsgboxService);
    expect(service).toBeTruthy();
  });
});
