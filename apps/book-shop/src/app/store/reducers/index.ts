import {
    ActionReducerMap,
    MetaReducer
  } from '@ngrx/store';
  
  import { environment } from '../../../environments/environment';
  import * as bookReducer from './book.reducer';
  import * as collectionReducer from './collection-item.reducer';
  import * as cartReducer from './cart-item.reducer';
  
  
  
  export interface State {
    book: bookReducer.State;
    cartItems:cartReducer.CartItemState,
    collectionItems:collectionReducer.CollectionItemState
  }
  
  export const reducers: ActionReducerMap<State> = {
    book: bookReducer.reducer,
    cartItems: cartReducer.reducer,
    collectionItems:collectionReducer.reducer
  };
  
  
  export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];