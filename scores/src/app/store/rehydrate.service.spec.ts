import { TestBed } from '@angular/core/testing';

import { RehydrateService } from './rehydrate.service';

describe('RehydrateService', () => {
  let service: RehydrateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RehydrateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
