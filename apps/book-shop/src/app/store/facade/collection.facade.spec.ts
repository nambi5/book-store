import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../reducers';
import { CollectionFacade } from './collection.facade';

describe('CollectionFacade', () => {
  let service: CollectionFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, { metaReducers })
      ]
    });
    service = TestBed.inject(CollectionFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
