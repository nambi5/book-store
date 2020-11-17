import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemsEntity } from '../../models/book-search.model';
import * as cartItemAction from '../actions/cart-item.actions';

import { CartItemState } from '../reducers/cart-item.reducer'
import { cartItems } from '../selectors/book.selectors';

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  listCartItems$ = this.store.select(cartItems);
  
  constructor(private store: Store<CartItemState>) { }

  addCartItem(bookDetails:ItemsEntity){
    this.store?.dispatch(cartItemAction.addCartItem({ cartItem: bookDetails }));
  }

  deleteCartItem(id: string){
    this.store.dispatch(cartItemAction.deleteCartItem({id}));
  }
}
