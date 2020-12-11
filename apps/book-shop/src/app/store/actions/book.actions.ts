import { Book } from '@book-store/ui';
import { createAction, props } from '@ngrx/store';
import {ItemsEntity} from '../../models/book-search.model';
import { BillingDetails } from '../../models/user-details.model';

export const loadBooks = createAction(
  '[Book] Load Books',
  props<{searchTerm: string}>()
);

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ response: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: string }>()
);

export const setSearchTerm = createAction(
  '[Book] Set search Term',
  props<{ data: string }>()
);

export const setSelectedBook = createAction(
  '[Book] Set selected Book',
  props<{ data: Book }>()
);
export const clearSelectedItem = createAction(
  '[Book] remove selected Book',
);
export const addBillingDetails = createAction(
  '[User Info] add Billing Details',
  props<{ info: BillingDetails }>()
);
