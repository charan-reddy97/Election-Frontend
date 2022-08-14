import { TestBed } from '@angular/core/testing';

import { PollresultsService } from './pollresults.service';

describe('PollresultsService', () => {
  let service: PollresultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PollresultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
