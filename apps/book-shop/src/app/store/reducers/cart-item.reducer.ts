import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CartItem } from '../models/cart-item.model';
import * as CartItemActions from '../actions/cart-item.actions';

export const cartItemsFeatureKey = 'cartItems';

export interface CartItemState extends EntityState<CartItem> {
  // additional entities state properties
}

export const cartItemAdapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>();

export const cartItemState: CartItemState = cartItemAdapter.getInitialState({
  // additional entity state properties
});


export const cartItemReducer = createReducer(
  cartItemState,
  on(CartItemActions.addCartItem,
    (state, action) =>cartItemAdapter.addOne(action.cartItem, state)
  ),
  on(CartItemActions.addCartItems,
    (state, action) => cartItemAdapter.addMany(action.cartItems, state)
  ),
  on(CartItemActions.deleteCartItem,
    (state, action) => cartItemAdapter.removeOne(action.id, state)
  ),
  on(CartItemActions.deleteCartItems,
    (state, action) => cartItemAdapter.removeMany(action.ids, state)
  ),
  on(CartItemActions.loadCartItems,
    (state, action) => cartItemAdapter.setAll(action.cartItems, state)
  ),
  on(CartItemActions.clearCartItems,
    state => cartItemAdapter.removeAll(state)
  ),
);

export function reducer(state: CartItemState | undefined, action: Action) {
  return cartItemReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = cartItemAdapter.getSelectors();

// select the array of CartItem ids
export const selectCartItemIds = selectIds;
 
// select the dictionary of CartItem entities
export const selectCartItemEntities = selectEntities;
 
// select the array of users
export const selectAllCartItems = selectAll;
 
// select the total CartItem count
export const selectCartItemTotal = selectTotal;