import { TestBed, inject } from '@angular/core/testing';

import { BizService } from './biz.service';

describe('BizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BizService]
    });
  });

  it('should be created', inject([BizService], (service: BizService) => {
    expect(service).toBeTruthy();
  }));
});
