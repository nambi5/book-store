import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addBillingDetails, addToCollection } from '../state/actions/book.actions';

@Component({
  selector: 'book-store-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss'],
})
export class BillingInfoComponent implements OnInit {
  billingForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}
  addBillingInfo() {
    if (this.billingForm.valid) {
      this.store.dispatch(addBillingDetails({ info: this.billingForm.value }));
      this.store.dispatch(addToCollection());
      this.router.navigateByUrl('/collection');
    }
  }
}
