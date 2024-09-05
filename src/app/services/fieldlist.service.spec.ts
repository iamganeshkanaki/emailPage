import { TestBed } from '@angular/core/testing';

import { FieldlistService } from './fieldlist.service';

describe('FieldlistService', () => {
  let service: FieldlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
