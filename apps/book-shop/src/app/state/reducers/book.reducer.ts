import { Action, createReducer, on } from '@ngrx/store';
import { BillingDetails } from '../../models/user-details.model';
import * as bookAction from '../actions/book.actions';
export const bookFeatureKey = 'book';

export interface State {
  cartItem: string[];
  collectionItem: [];
  searchKey: string;
  selectedBookId: string;
  list: [];
  loaded: boolean;
  error: any;
  billingDetails: null | BillingDetails;
}

export const initialState: State = {
  cartItem: [],
  collectionItem: [],
  searchKey: '',
  selectedBookId: '',
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
  on(bookAction.addToCart, (state, data) => {
    if (state.cartItem.indexOf(data.id) === -1) {
      return { ...state, cartItem: state.cartItem.concat(data.id) };
    }
    else{
      return state;
    }
  }),
  on(bookAction.addToCollection, (state) => {
    return {
      ...state,
      collectionItem: [...state.collectionItem, state.selectedBookId],
    };
  }),
  on(bookAction.setSelectedBookId, (state, data) => ({
    ...state,
    selectedBookId: data.data,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return bookReducer(state, action);
}
