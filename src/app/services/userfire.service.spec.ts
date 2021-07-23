import { TestBed } from '@angular/core/testing';

import { UserfireService } from './userfire.service';

describe('UserfireService', () => {
  let service: UserfireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserfireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
