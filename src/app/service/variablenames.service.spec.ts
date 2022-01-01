import { TestBed } from '@angular/core/testing';

import { VariablenamesService } from './variablenames.service';

describe('VariablenamesService', () => {
  let service: VariablenamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariablenamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
