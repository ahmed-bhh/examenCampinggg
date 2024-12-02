import { TestBed } from '@angular/core/testing';

import { CampingSericeService } from './camping-serice.service';

describe('CampingSericeService', () => {
  let service: CampingSericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampingSericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
