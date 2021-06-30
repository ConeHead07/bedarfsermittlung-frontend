import { TestBed } from '@angular/core/testing';

import { HttpFakeBackendInterceptorService } from './http-fake-backend-interceptor.service';

describe('HttpFakeBackendInterceptorService', () => {
  let service: HttpFakeBackendInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpFakeBackendInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
