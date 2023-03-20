import { TestBed } from '@angular/core/testing';

import { BeersapiService } from './beersapi.service';

describe('BeersapiService', () => {
  let service: BeersapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeersapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
