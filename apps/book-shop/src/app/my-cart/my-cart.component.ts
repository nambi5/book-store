import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearSelectedItem, removeFromCart } from '../store/actions/book.actions';
import { cartItems } from '../store/selectors/book.selectors';
import {cartItemsFeatureKey} from '../store/reducers/cart-item.reducer'; 
import { deleteCartItem } from '../store/actions/cart-item.actions';
import { Router } from '@angular/router';
@Component({
  selector: 'book-store-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  booksList: any;
  constructor(private store: Store<{cartItemsFeatureKey: any}>,
    private router: Router) { }

  ngOnInit(): void {
    this.store.select(cartItems).subscribe(
      (res) =>{
         console.log(res);
         this.booksList = res;
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
    console.log(id,'bookId');
    this.store.dispatch(deleteCartItem({id}));
  }
  buyNow(){
    this.router.navigateByUrl('/billingInfo').then(
      () => this.store.dispatch(clearSelectedItem())
    );
  }
}
