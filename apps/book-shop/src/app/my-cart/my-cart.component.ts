import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearSelectedItem } from '../store/actions/book.actions';
import { cartItems } from '../store/selectors/book.selectors';
import {cartItemsFeatureKey} from '../store/reducers/cart-item.reducer'; 
import { deleteCartItem } from '../store/actions/cart-item.actions';
import { Router } from '@angular/router';

import {CartFacade} from '../store/facade/cart.facade'
import { BookFacade } from '../store/facade/book.facade';
@Component({
  selector: 'book-store-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit, OnDestroy {
  booksList: any;
  constructor(
    private cartFacade:CartFacade,
    private bookFacade:BookFacade,
    private router: Router) { }

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems(){
    this.cartFacade.listCartItems$.subscribe(
      (res) =>{
        if(res){
          this.booksList = res;
        }
      }
    )
  }
  removeFromCart(id){
    this.cartFacade.deleteCartItem(id);
  }
  buyNow(){
    this.bookFacade.clearSelectedState();
    this.router.navigateByUrl('/billingInfo');
  }
  ngOnDestroy(){
    // if(this.store){
    //   this.store = null;
    // }
  }
}
