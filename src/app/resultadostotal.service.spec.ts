import { TestBed } from '@angular/core/testing';

import { ResultadostotalService } from './resultadostotal.service';

describe('ResultadostotalService', () => {
  let service: ResultadostotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadostotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
