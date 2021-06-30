import { TestBed } from '@angular/core/testing';

import { InterviewOverviewDataService } from './interview-overview-data.service';

describe('InterviewOverviewDataService', () => {
  let service: InterviewOverviewDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewOverviewDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
