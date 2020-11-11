import { createAction, props } from '@ngrx/store';
import {ItemsEntity} from '../../models/book-search.model'
export const loadBooks = createAction(
  '[Book] Load Books',
  props<{searchTerm: string}>()
);

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ response: ItemsEntity[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: any }>()
);

export const setSearchTerm = createAction(
  '[Book] Set search Term',
  props<{ data: any }>()
);

export const setSelectedBookId = createAction(
  '[Book] Set selected Book Id',
  props<{ data: any }>()
);

export const addToCart = createAction(
  '[Book] add book to cart',
  props<{ id: any }>()
);
