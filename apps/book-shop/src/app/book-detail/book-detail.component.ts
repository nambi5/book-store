import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Book} from '@book-store/ui';
import { BookFacade } from '../store/facade/book.facade';
@Component({
  selector: 'book-store-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  bookDetails: any;
  constructor(
    private bookFacade:BookFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSelectedBook();
  }
  getSelectedBook() : void{
    this.bookFacade.selectedBook$.subscribe((book: Book) => {
      if (!book?.id) {
        this.router.navigateByUrl('/');
      }
      this.bookDetails = book;
    });
  }

  addIdToCart(bookDetails): void{
    this.bookFacade.addCartItem(bookDetails);
  }
  buyNow(): void {
    this.router.navigateByUrl('/billingInfo');
  }
}
