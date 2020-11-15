import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { CartItem } from '../models/cart-item.model';

export const loadCartItems = createAction(
  '[CartItem/API] Load CartItems', 
  props<{ cartItems: CartItem[] }>()
);

export const addCartItem = createAction(
  '[CartItem/API] Add CartItem',
  props<{ cartItem: CartItem }>()
);

export const upsertCartItem = createAction(
  '[CartItem/API] Upsert CartItem',
  props<{ cartItem: CartItem }>()
);

export const addCartItems = createAction(
  '[CartItem/API] Add CartItems',
  props<{ cartItems: CartItem[] }>()
);

export const upsertCartItems = createAction(
  '[CartItem/API] Upsert CartItems',
  props<{ cartItems: CartItem[] }>()
);

export const updateCartItem = createAction(
  '[CartItem/API] Update CartItem',
  props<{ cartItem: Update<CartItem> }>()
);

export const updateCartItems = createAction(
  '[CartItem/API] Update CartItems',
  props<{ cartItems: Update<CartItem>[] }>()
);

export const deleteCartItem = createAction(
  '[CartItem/API] Delete CartItem',
  props<{ id: string }>()
);

export const deleteCartItems = createAction(
  '[CartItem/API] Delete CartItems',
  props<{ ids: string[] }>()
);

export const clearCartItems = createAction(
  '[CartItem/API] Clear CartItems'
);
