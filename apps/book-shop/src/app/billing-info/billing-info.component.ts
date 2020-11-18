import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ItemsEntity } from '../models/book-search.model';
import { addBillingDetails, clearSelectedItem } from '../store/actions/book.actions';
import { clearCartItems } from '../store/actions/cart-item.actions';
import { addCollectionItem, addCollectionItems } from '../store/actions/collection-item.actions';
import { BookFacade } from '../store/facade/book.facade';
import { CartFacade } from '../store/facade/cart.facade';
import { CollectionFacade } from '../store/facade/collection.facade';
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
  cartItems: ItemsEntity[];
  constructor(
    private cartFacade:CartFacade,
    private bookFacade:BookFacade,
    private collectionFacade:CollectionFacade,
     private router: Router
    ) {}

  ngOnInit(): void {
    this.getSelectedBook();
    this.getBillingDetails();
    this.getCartItemts();    
  }
  getSelectedBook(){
    this.bookFacade.selectedBook$.subscribe(
      (res)=>this.selectedBook = res
    )
  }
  getCartItemts(){
    this.cartFacade.listCartItems$.subscribe(
      (res:ItemsEntity[]) => {
        if(res.length){
          this.cartItems = res;
        }
      });
  }
  getBillingDetails(){
    this.bookFacade.userDetails$.subscribe(
      (res: any)=>{
        if(res){
          this.billingForm.get('name').setValue(res.name);
          this.billingForm.get('email').setValue(res.email);
          this.billingForm.get('phone').setValue(res.phone);
          this.billingForm.get('address').setValue(res.address);
        }
      }
    )
  }
  addBillingInfo() {
    if (this.billingForm.valid) {
      this.bookFacade.addBillingDetails(this.billingForm.value);
      if(this.selectedBook){
        this.addSelectedItemToCollection()
      }
      else{
        this.addCartItemToCollection();
      }
    }
  }
  addCartItemToCollection() {    
    this.collectionFacade.addItemsToCollection(this.cartItems);
    this.cartFacade.clearCartItems();
    this.navigateToCollection();
        
      
  }
  addSelectedItemToCollection() {
    this.collectionFacade.addItemToCollection(this.selectedBook);
    this.bookFacade.clearSelectedState();
    this.navigateToCollection();
        
  }
  navigateToCollection(){
    this.router.navigateByUrl('collection');
  }
  ngOnDestroy(){
    // if(this.store){
    //   this.store = null;
    // }
  }
}
