import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookFacade } from '../store/facade/book.facade';
import { ItemsEntity } from '../models/book-search.model';
@Component({
  selector: 'book-store-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss'],
})
export class MyCartComponent implements OnInit {
  booksList: ItemsEntity[];
  constructor(
    private bookFacade: BookFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems() {
    this.bookFacade.listCartItems$.subscribe((res: ItemsEntity[]) => {
      if (res) {
        this.booksList = res;
      }
    });
  }
  removeFromCart(id: string) {
    this.bookFacade.deleteCartItem(id);
  }
  buyNow() {
    this.bookFacade.clearSelectedState();
    this.router.navigateByUrl('/billingInfo');
  }
}
