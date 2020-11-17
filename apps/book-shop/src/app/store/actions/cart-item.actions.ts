import { createAction, props } from '@ngrx/store';

import { CartItem } from '../models/cart-item.model';

export const loadCartItems = createAction(
  '[CartItem/API] Load CartItems', 
  props<{ cartItems: CartItem[] }>()
);

export const addCartItem = createAction(
  '[CartItem/API] Add CartItem',
  props<{ cartItem: CartItem }>()
);

export const addCartItems = createAction(
  '[CartItem/API] Add CartItems',
  props<{ cartItems: CartItem[] }>()
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
