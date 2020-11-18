import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../reducers';

import { CartFacade } from './cart.facade';

describe('CartFacade', () => {
  let service: CartFacade;
  let store:Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, { metaReducers })
      ]
    });
    service = TestBed.inject(CartFacade);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
