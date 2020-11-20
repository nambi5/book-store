import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { UiModule } from '@book-store/ui';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { BookFacade } from '../store/facade/book.facade';
import { reducers, metaReducers } from '../store/reducers';
import { MyCartComponent } from './my-cart.component';

describe('MyCartComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;
  let router: Router;
  let bookFacade: BookFacade;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCartComponent],
      imports: [
        RouterTestingModule,
        UiModule,
        StoreModule.forRoot(reducers, { metaReducers }),
      ],
      providers: [{ provide: Router, useValue: { navigateByUrl: () => {} } },BookFacade],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    bookFacade = TestBed.inject(BookFacade);
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
  it('should load book details from getCartItems', () => {
    spyOn(bookFacade.listCartItems$, 'subscribe').and.returnValue(of({ book: {} }));
    fixture.detectChanges();

    component.getCartItems();
    bookFacade.listCartItems$.subscribe(()=>
      expect(component.booksList).toEqual({ book: {} })
    )
  });

  it('should call navigatebyURl function when buynow clicked', () => {
    const url = '/billingInfo';
    spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));
    component.buyNow();

    expect(router.navigateByUrl).toHaveBeenCalledWith(url);
  });

  it('should dispatch an action to clear selected item', () => {
    const dispatchSpy = spyOn(bookFacade, 'clearSelectedState');
    component.buyNow();

    expect(dispatchSpy).toHaveBeenCalledWith();
  });
  it('should remove item from cart', () => {
    const dispatchSpy = spyOn(bookFacade, 'deleteCartItem');
    component.removeFromCart('1');
    expect(dispatchSpy).toHaveBeenCalledWith('1');
  });
});
