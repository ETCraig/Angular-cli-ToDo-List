import { TestBed } from '@angular/core/testing';

import { AddingService } from './adding.service';

describe('AddingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddingService = TestBed.get(AddingService);
    expect(service).toBeTruthy();
  });
});
