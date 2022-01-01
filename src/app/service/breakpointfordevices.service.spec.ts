import { TestBed } from '@angular/core/testing';

import { BreakpointfordevicesService } from './breakpointfordevices.service';

describe('BreakpointfordevicesService', () => {
  let service: BreakpointfordevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakpointfordevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
