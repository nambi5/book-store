import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { UiModule } from '@book-store/ui';
import { of } from 'rxjs';

import { reducers, metaReducers } from '../store/reducers';
import { BillingInfoComponent } from './billing-info.component';
import { BookFacade } from '../store/facade/book.facade';
import { ItemsEntity } from '../models/book-search.model';
import { fakeBookForTesting } from '../fake-db/book';
describe('BillingInfoComponent', () => {
  let component: BillingInfoComponent;
  let fixture: ComponentFixture<BillingInfoComponent>;
  let bookFacade: BookFacade;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingInfoComponent],
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule,
        HttpClientTestingModule,
        UiModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
      providers: [{ provide: Router, useValue: { navigateByUrl: () => {} } },HttpClient],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(BillingInfoComponent);
    component = fixture.componentInstance;
    bookFacade = TestBed.inject(BookFacade);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load billing details  in OnInit', () => {
    spyOn(component, 'getBillingDetails');
    component.ngOnInit();
    expect(component.getBillingDetails).toBeCalled();
  });
  it('should load  selectedBook in OnInit', () => {
    spyOn(component, 'getSelectedBook');
    component.ngOnInit();
    expect(component.getSelectedBook).toBeCalled();
  });
  it('should get selected book details from store', () => {
    const dummyData = fakeBookForTesting;
    spyOn(bookFacade.selectedBook$, 'subscribe').and.returnValue(of(dummyData));
    component.getSelectedBook();
    bookFacade.selectedBook$.subscribe(()=>{
      expect(component.selectedBook).toEqual(dummyData);
    })
  });
  it('should get Cart items from from store', () => {
    const dummyData = fakeBookForTesting;
    spyOn(bookFacade.selectedBook$, 'subscribe').and.returnValue(of([dummyData]));
    component.getCartItemts();
    bookFacade.listCartItems$.subscribe(()=>{
      expect(component.cartItems).toEqual([dummyData]);
    })
  });
  it('should add billing details to collection when form is valid', ()=>{
    const dispatchSpy = spyOn(bookFacade,'addBillingDetails');
    const dummyValue = {name: "nambi", email: "nambi@testing.com", phone: "8870", address: "address"};
    component.billingForm.setValue(dummyValue);
    component.addBillingInfoAndSaveItemsToCollection();
    expect(dispatchSpy).toHaveBeenCalledWith(dummyValue);
  });
  it('should not add billing details to collection when form is invalid', ()=>{
    const dispatchSpy = spyOn(bookFacade,'addBillingDetails');
    const dummyValue = {name: "nambi", email: "nambi@testing.com", phone: "8870", address: "address"};
    component.addBillingInfoAndSaveItemsToCollection();
    expect(dispatchSpy).not.toHaveBeenCalledWith(dummyValue);
  });
  it('should add selected value to store collection ',()=>{
    spyOn(component,'addSelectedItemToCollection');
    Object.defineProperty(component.billingForm,'valid',{value:true,writable:true});
    const dummyData = fakeBookForTesting;
    component.selectedBook = dummyData;
    component.addBillingInfoAndSaveItemsToCollection();
    expect(component.addSelectedItemToCollection).toHaveBeenCalled();
  })
  it('should add selected value to store collection ',()=>{
    spyOn(component,'addCartItemToCollection');
    Object.defineProperty(component.billingForm,'valid',{value:true,writable:true});
    component.addBillingInfoAndSaveItemsToCollection();
    expect(component.addCartItemToCollection).toHaveBeenCalled()
  })
  it('should select cartitems and assign to collection', ()=>{
    spyOn(component,'navigateToCollection');
    
    const dummyData:ItemsEntity = fakeBookForTesting;
    component.cartItems = [dummyData];
    const dispatchSpy = spyOn(bookFacade, 'addItemsToCollection');
    component.addCartItemToCollection();
    expect(dispatchSpy).toHaveBeenCalledWith([dummyData]);
    expect(component.navigateToCollection).toHaveBeenCalled();
  });
  it('should add selected item to collection',() =>{
    spyOn(component, 'navigateToCollection');
    const dummyData:ItemsEntity = fakeBookForTesting;
    component.selectedBook = dummyData;
    const dispatchSpy = spyOn(bookFacade, 'addItemToCollection');
    component.addSelectedItemToCollection();
    expect(dispatchSpy).toHaveBeenCalledWith(dummyData);
    expect(component.navigateToCollection).toHaveBeenCalled();

  })
  it('should call navigatebyURl function when navigateToCollection clicked', ()=>{
    const url = 'collection';
    spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));
    component.navigateToCollection();

    expect(router.navigateByUrl).toHaveBeenCalledWith(url);
  });
});
