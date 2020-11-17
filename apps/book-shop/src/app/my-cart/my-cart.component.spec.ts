import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@book-store/ui';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { clearSelectedItem } from '../store/actions/book.actions';
import { deleteCartItem } from '../store/actions/cart-item.actions';
import { reducers, metaReducers } from '../store/reducers';

import { MyCartComponent } from './my-cart.component';

describe('MyCartComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;
  let router: Router;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCartComponent],
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule,
        UiModule,
      ],
      providers: [{ provide: Router, useValue: { navigateByUrl: () => {} } }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getCartItem from onInit', () => {
    spyOn(component, 'getCartItems');
    component.ngOnInit();
    expect(component.getCartItems).toBeCalled();
  });
  it('should set store to null onNgDestroy', () => {
    component.ngOnDestroy();
    expect(component['store']).toBeNull();
  });
  it('should load book details from getCartItems', () => {
    spyOn(store, 'select').and.returnValue(of({ book: {} }));
    fixture.detectChanges();

    component.getCartItems();
    expect(component.booksList).toEqual({ book: {} });
  });

  it('should call navigatebyURl function when buynow clicked', () => {
    const url = '/billingInfo';
    spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));
    component.buyNow();

    expect(router.navigateByUrl).toHaveBeenCalledWith(url);
  });

  it('should dispatch an action to clear selected item', () => {
    const url = '/billingInfo';
    const dispatchSpy = spyOn(store, 'dispatch');
    component.buyNow();

    expect(dispatchSpy).toHaveBeenCalledWith(clearSelectedItem());
  });
  it('should remove item from cart', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.removeFromCart('1');
    expect(dispatchSpy).toHaveBeenCalledWith(deleteCartItem({ id: '1' }));
  });
});
