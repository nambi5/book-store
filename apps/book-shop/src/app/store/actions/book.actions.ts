import { createAction, props } from '@ngrx/store';
import {ItemsEntity} from '../../models/book-search.model';

export const loadBooks = createAction(
  '[Book] Load Books',
  props<{searchTerm: string}>()
);

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ response: any[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: any }>()
);

export const setSearchTerm = createAction(
  '[Book] Set search Term',
  props<{ data: any }>()
);

export const setSelectedBook = createAction(
  '[Book] Set selected Book',
  props<{ data: any }>()
);
export const clearSelectedItem = createAction(
  '[Book] remove selected Book',
);
export const addBillingDetails = createAction(
  '[User Info] add Billing Details',
  props<{ info: any }>()
);
