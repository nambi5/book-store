import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ItemsEntity } from '../models/book-search.model';
import { BookFacade } from '../store/facade/book.facade';

@Component({
  selector: 'book-store-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss'],
})
export class BillingInfoComponent implements OnInit {
  billingForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });
  selectedBook: ItemsEntity;
  cartItems: ItemsEntity[];
  constructor(
    private bookFacade: BookFacade,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getSelectedBook();
    this.getBillingDetails();
    this.getCartItemts();
  }

  getSelectedBook(): void {
    this.bookFacade.selectedBook$.subscribe((res) => (this.selectedBook = res));
  }

  getBillingDetails(): void {
    this.bookFacade.userDetails$.subscribe((res: any) => {
      if (res) {
        this.billingForm.get('name').setValue(res.name);
        this.billingForm.get('email').setValue(res.email);
        this.billingForm.get('phone').setValue(res.phone);
        this.billingForm.get('address').setValue(res.address);
      }
    });
  };

  getCartItemts(): void {
    this.bookFacade.listCartItems$.subscribe((res: ItemsEntity[]) => {
      if (res.length) {
        this.cartItems = res;
      }
    });
  };

  addBillingInfoAndSaveItemsToCollection(): void {
    if (this.billingForm.valid) {
      this.bookFacade.addBillingDetails(this.billingForm.value);
      this.addItemsToCollectionAndShowToaster();
    }
  };

  addItemsToCollectionAndShowToaster(): void{
    if (this.selectedBook) {
      this.addSelectedItemToCollection();
    } else {
      this.addCartItemToCollection();
    }
    this.showToaster('Books added to your Collection.');
  }

  addSelectedItemToCollection(): void {
    this.bookFacade.addItemToCollection(this.selectedBook);
    this.bookFacade.clearSelectedState();
    this.navigateToCollection();
  }

  addCartItemToCollection(): void {
    this.bookFacade.addItemsToCollection(this.cartItems);
    this.bookFacade.clearCartItems();
    this.navigateToCollection();
  }

  showToaster(message: string) {
    this._snackBar.open(message, 'Ok', {
      duration: 2500,
    });
  }

  navigateToCollection(): void {
    this.router.navigateByUrl('collection');
  }
}
