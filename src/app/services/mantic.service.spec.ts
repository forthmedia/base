import { TestBed } from '@angular/core/testing';

import { ManticService } from './mantic.service';

describe('ManticService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManticService = TestBed.get(ManticService);
    expect(service).toBeTruthy();
  });
});
