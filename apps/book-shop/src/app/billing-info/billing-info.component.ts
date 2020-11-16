import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ItemsEntity } from '../models/book-search.model';
import { addBillingDetails, addToCollection, clearSelectedItem } from '../store/actions/book.actions';
import { clearCartItems } from '../store/actions/cart-item.actions';
import { addCollectionItem, addCollectionItems } from '../store/actions/collection-item.actions';
import { selectAllCartItems } from '../store/reducers/cart-item.reducer';
import { cartItems, selectedBook, userDetails } from '../store/selectors/book.selectors';

@Component({
  selector: 'book-store-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss'],
})
export class BillingInfoComponent implements OnInit, OnDestroy {
  billingForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });
  selectedBook: ItemsEntity;
  constructor(private store: Store, private router: Router
    ) {}

  ngOnInit(): void {
    this.store.select(selectedBook).subscribe(
      (res)=>this.selectedBook = res
    )
    this.store.select(userDetails).subscribe(
      (res: any)=>{
        this.billingForm.get('name').setValue(res?.name);
        this.billingForm.get('email').setValue(res?.email);
        this.billingForm.get('phone').setValue(res?.phone);
        this.billingForm.get('address').setValue(res?.address);
      }
    )
  }
  addBillingInfo() {
    if (this.billingForm.valid) {
      this.store.dispatch(addBillingDetails({ info: this.billingForm.value }));
      if(this.selectedBook){
        this.store?.dispatch(addCollectionItem({collectionItem:this.selectedBook}));
        this.store?.dispatch(clearSelectedItem());
        this.router.navigateByUrl('collection');
      }
      else{
        this.store.select(cartItems).subscribe(
          (res) => {
            if(res.length){
              this.store?.dispatch(addCollectionItems({collectionItems:res}));
              this.store?.dispatch(clearCartItems());
              this.router.navigateByUrl('collection');
            }
          }
        )
      }
    }
  }
  ngOnDestroy(){
    if(this.store){
      this.store = null;
    }
  }
}
