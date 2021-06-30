import { TestBed } from '@angular/core/testing';

import { MobilesArbeitenDataService } from './mobiles-arbeiten-data.service';

describe('MobilesArbeitenDataService', () => {
  let service: MobilesArbeitenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobilesArbeitenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
