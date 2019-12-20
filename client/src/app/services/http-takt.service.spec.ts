import { TestBed } from '@angular/core/testing';

import { HttpTaktService } from './http-takt.service';

describe('HttpTaktService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpTaktService = TestBed.get(HttpTaktService);
    expect(service).toBeTruthy();
  });
});
