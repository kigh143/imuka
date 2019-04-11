import { TestBed, inject } from '@angular/core/testing';

import { SessionapiService } from './sessionapi.service';

describe('SessionapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionapiService]
    });
  });

  it('should be created', inject([SessionapiService], (service: SessionapiService) => {
    expect(service).toBeTruthy();
  }));
});
