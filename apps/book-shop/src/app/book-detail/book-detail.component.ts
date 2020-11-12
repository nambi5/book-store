import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { mergeMap } from 'rxjs/operators';
import { ItemsEntity } from '../models/book-search.model';
import { HttpApiService } from '../services/http-api.service';
import { addToCart } from '../state/actions/book.actions';
import {
  selectedBook,
  selectedBookDetails,
} from '../state/selectors/book.selectors';

@Component({
  selector: 'book-store-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  bookDetails: ItemsEntity;
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store
      .select(selectedBook)
      .pipe(
        mergeMap((id) => {
          if (!id) {
            this.router.navigateByUrl('/');
          }
          return this.store.select(selectedBookDetails, id);
        })
      )
      .subscribe((res: ItemsEntity) => {
        this.bookDetails = res;
        console.log(this.bookDetails);
      });
  }

  addIdToCart(id) {
    console.log(id);
    this.store.dispatch(addToCart({ id }));
  }
  buyNow() {
    this.router.navigateByUrl('/billingInfo');
  }
}
