import { TestBed } from '@angular/core/testing';

import { MobilesArbeitenAbleitungDataService } from './mobiles-arbeiten-ableitung-data.service';

describe('MobilesArbeitenAbleitungDataService', () => {
  let service: MobilesArbeitenAbleitungDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobilesArbeitenAbleitungDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
