import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearSelectedItem } from '../store/actions/book.actions';
import { cartItems } from '../store/selectors/book.selectors';
import {cartItemsFeatureKey} from '../store/reducers/cart-item.reducer'; 
import { deleteCartItem } from '../store/actions/cart-item.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'book-store-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit, OnDestroy {
  booksList: any;
  constructor(private store: Store<{cartItemsFeatureKey: any}>,
    private router: Router) { }

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems(){
    this.store?.select(cartItems).subscribe(
      (res) =>{
        if(this.store){
          this.booksList = res;
        }
      }
    )
  }
  getDescription(book){
    if(book?.volumeInfo?.description?.length >120){
      return book?.volumeInfo?.description.slice(0,120) + '...';
    }else{
      return book?.volumeInfo?.description;
    }
  }
  removeFromCart(id){
    this.store.dispatch(deleteCartItem({id}));
  }
  buyNow(){
    this.store?.dispatch(clearSelectedItem());
    this.router.navigateByUrl('/billingInfo');
    
  }
  ngOnDestroy(){
    if(this.store){
      this.store = null;
    }
  }
}
