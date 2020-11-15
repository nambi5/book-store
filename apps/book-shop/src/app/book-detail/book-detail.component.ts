import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { mergeMap } from 'rxjs/operators';
import { ItemsEntity } from '../models/book-search.model';
import { HttpApiService } from '../services/http-api.service';
import { addToCart } from '../store/actions/book.actions';
import {
  selectedBook,
  selectedBookDetails,
} from '../store/selectors/book.selectors';
import { cartItemsFeatureKey } from '../store/reducers/cart-item.reducer';
import { addCartItem } from '../store/actions/cart-item.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'book-store-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit, OnDestroy {
  bookDetails: ItemsEntity;
  constructor(
    private store: Store<{ cartItemsFeatureKey: any }>,
    private router: Router
  ) {}

  ngOnInit(): void {
     this.store
      ?.select(selectedBook)
      ?.subscribe((book: ItemsEntity) => {
        if (!book?.id && this.store) {
          this.router.navigateByUrl('/');
        }
        this.bookDetails = book;
        console.log(this.bookDetails);
      });
  }

  addIdToCart(bookDetails) {
    console.log(bookDetails);
    this.store?.dispatch(addCartItem({ cartItem: bookDetails }));
  }
  buyNow() {
    this.router.navigateByUrl('/billingInfo');
  }
  ngOnDestroy(){
    if(this.store){
      this.store = null;
    }
  }
}
