import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ItemsEntity } from '../models/book-search.model';
import {
  selectedBook,
} from '../store/selectors/book.selectors';
import { addCartItem } from '../store/actions/cart-item.actions';

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
    this.getSelectedBook();
  }
  getSelectedBook() {
    this.store?.select(selectedBook)?.subscribe((book: ItemsEntity) => {
      if (!book?.id && this.store) {
        this.router.navigateByUrl('/');
      }
      this.bookDetails = book;
    });
  }

  addIdToCart(bookDetails) {
    this.store?.dispatch(addCartItem({ cartItem: bookDetails }));
  }
  buyNow() {
    this.router.navigateByUrl('/billingInfo');
  }
  ngOnDestroy() {
    if (this.store) {
      this.store = null;
    }
  }
}
