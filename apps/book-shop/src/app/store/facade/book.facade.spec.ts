import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../reducers';

import { BookFacade } from './book.facade';

describe('BookFacade', () => {
  let service: BookFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, { metaReducers })
      ]
    });
    service = TestBed.inject(BookFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
