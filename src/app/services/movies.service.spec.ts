import { TestBed } from '@angular/core/testing';

import { CountryServices } from './movies.service';

describe('MoviesService', () => {
  let service: CountryServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
