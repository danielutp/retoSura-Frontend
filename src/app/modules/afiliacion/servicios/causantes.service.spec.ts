import { TestBed } from '@angular/core/testing';

import { CausantesService } from './causantes.service';

describe('CausantesService', () => {
  let service: CausantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CausantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
