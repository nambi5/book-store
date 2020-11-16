import { Action, createReducer, on } from '@ngrx/store';
import { ItemsEntity } from '../../models/book-search.model';
import { BillingDetails } from '../../models/user-details.model';
import * as bookAction from '../actions/book.actions';
import { cartItemState, CartItemState } from '../reducers/cart-item.reducer';
import { collectionItemState, CollectionItemState } from '../reducers/collection-item.reducer';
export const bookFeatureKey = 'book';

export interface State {
  searchKey: string;
  selectedBook: ItemsEntity;
  list: ItemsEntity[];
  loaded: boolean;
  error: any;
  billingDetails: null | BillingDetails;
}

export const initialState: State = {
  searchKey: '',
  selectedBook: null,
  list: [],
  loaded: false,
  error: null,
  billingDetails: null,
};

export const bookReducer = createReducer(
  initialState,
  on(bookAction.loadBooks, (state) => ({ ...state })),
  on(bookAction.loadBooksFailure, (state) => ({
    ...state,
    error: 'Load Failed',
  })),
  on(bookAction.loadBooksSuccess, (state, data: any) => ({
    ...state,
    error: null,
    list: data.response,
    loaded: true,
  })),
  on(bookAction.setSearchTerm, (state, data) => ({
    ...state,
    searchKey: data.data,
  })),
  on(bookAction.addBillingDetails, (state, data) => ({
    ...state,
    billingDetails: data.info,
  })),
  on(bookAction.setSelectedBook, (state, data) => ({
    ...state,
    selectedBook: data.data,
  })),
  on(bookAction.clearSelectedItem, (state) => ({
    ...state,
    selectedBook: null,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return bookReducer(state, action);
}
