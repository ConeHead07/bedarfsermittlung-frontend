import { TestBed } from '@angular/core/testing';

import { TaetigkeitenDataService } from './taetigkeiten-data.service';

describe('TaetigkeitenDataService', () => {
  let service: TaetigkeitenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaetigkeitenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
