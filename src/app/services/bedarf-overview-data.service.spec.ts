import { TestBed } from '@angular/core/testing';

import { BedarfOverviewDataService } from './bedarf-overview-data.service';

describe('BedarfOverviewDataService', () => {
  let service: BedarfOverviewDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BedarfOverviewDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
