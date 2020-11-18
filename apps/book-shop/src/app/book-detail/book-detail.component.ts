import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ItemsEntity } from '../models/book-search.model';
import {
  selectedBook,
} from '../store/selectors/book.selectors';
import { addCartItem } from '../store/actions/cart-item.actions';
import { CartFacade } from '../store/facade/cart.facade';
import { BookFacade } from '../store/facade/book.facade';

@Component({
  selector: 'book-store-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit, OnDestroy {
  bookDetails: ItemsEntity;
  constructor(
    private cartFacade:CartFacade,
    private bookFacade:BookFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSelectedBook();
  }
  getSelectedBook() {
    this.bookFacade.selectedBook$.subscribe((book: ItemsEntity) => {
      if (!book?.id) {
        this.router.navigateByUrl('/');
      }
      this.bookDetails = book;
    });
  }

  addIdToCart(bookDetails) {
    this.cartFacade.addCartItem(bookDetails);
    // this.router.navigateByUrl('/');
  }
  buyNow() {
    this.router.navigateByUrl('/billingInfo');
  }
  ngOnDestroy() {
    // if (this.store) {
    //   this.store = null;
    // }
  }
}
