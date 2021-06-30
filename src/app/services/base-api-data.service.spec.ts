import { TestBed } from '@angular/core/testing';

import { BaseApiDataService } from './base-api-data.service';

describe('BaseApiDataService', () => {
  let service: BaseApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
