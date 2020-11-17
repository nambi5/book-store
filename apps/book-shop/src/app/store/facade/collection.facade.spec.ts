import { TestBed } from '@angular/core/testing';

import { CollectionFacade } from './collection.facade';

describe('CollectionFacade', () => {
  let service: CollectionFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
