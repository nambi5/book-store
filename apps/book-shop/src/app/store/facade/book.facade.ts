import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { State } from '../reducers/book.reducer';
import * as bookAction from '../actions/book.actions';
import { bookList, collectionItems, error, selectedBook, userDetails } from '../selectors/book.selectors';

import { cartItems, cartLength } from '../selectors/book.selectors';
import * as cartItemAction from '../actions/cart-item.actions';
import * as collectionAction from '../actions/collection-item.actions';
import { ItemsEntity } from '../../models/book-search.model';
import { Book } from '@book-store/ui';

@Injectable({
  providedIn: 'root'
})
export class BookFacade {
  //Book selector
  bookList$ = this.store?.select(bookList);
  error$ = this.store?.select(error);
  userDetails$ = this.store.select(userDetails);
  selectedBook$ = this.store?.select(selectedBook);

  //Cart selector
  listCartItems$ = this.store.select(cartItems);
  totalCartItemCount$ = this.store.select(cartLength);

  //Collection Selector
  collectionItemList$ = this.store?.select(collectionItems); 

  constructor(private store: Store<State>) { }
  //Books facade
  lookBooks(searchTerm:string){
    return this.store?.dispatch(bookAction.loadBooks({searchTerm}))
  }
  setSearchTerm(searchTerm:string){
    return this.store?.dispatch(bookAction.setSearchTerm({data:searchTerm}));
  }
  setSelectedBook(book){
    return this.store?.dispatch(bookAction.setSelectedBook({data:book}));
  }
  clearSelectedState(){
    return this.store?.dispatch(bookAction.clearSelectedItem())
  }
  addBillingDetails(billingDetails){
    return this.store.dispatch(bookAction.addBillingDetails({ info: billingDetails }))
  }

  //Cart Facade
  addCartItem(bookDetails:Book){
    this.store?.dispatch(cartItemAction.addCartItem({ cartItem: bookDetails }));
  }

  deleteCartItem(id: string){
    this.store.dispatch(cartItemAction.deleteCartItem({id}));
  }
  clearCartItems(){
    return this.store?.dispatch(cartItemAction.clearCartItems());
  }

  //Collection Facade
  addItemsToCollection(res){
    this.store?.dispatch(collectionAction.addCollectionItems({collectionItems:res}))
  }
  addItemToCollection(book: Book){
    this.store?.dispatch(collectionAction.addCollectionItem({collectionItem:book}))
  }
}
