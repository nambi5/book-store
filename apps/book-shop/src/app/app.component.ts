import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartItemId, cartLength } from './store/selectors/book.selectors';

@Component({
  selector: 'book-store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'book-shop';
  asyncCartLength: Observable<number>;
  constructor(private store: Store){
    this.asyncCartLength = this.store.select(cartLength);
  }

}
