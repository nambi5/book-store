import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { BookDetailComponent } from './book-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { UiModule } from '@book-store/ui';
import { of } from 'rxjs';
import { addCartItem } from '../store/actions/cart-item.actions';
describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let router: Router;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailComponent],
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule,
        MatButtonModule,
        UiModule,
      ],
      providers: [{ provide: Router, useValue: { navigateByUrl: () => {} } }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call selectedbook method from onInit', ()=>{
    spyOn(component,'getSelectedBook');

    component.ngOnInit();
    expect(component.getSelectedBook).toHaveBeenCalled();
  });

  it('should load book details from getSelectedBook', ()=>{
    spyOn(store,'select').and.returnValue(of({book:{id:123}}));
    fixture.detectChanges();

    component.getSelectedBook();
    expect(component.bookDetails).toEqual({book:{id:123}});
  });

  it('should call navigatebyURl function when buynow clicked', ()=>{
    const url = '/billingInfo';
    spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));
    component.buyNow();

    expect(router.navigateByUrl).toHaveBeenCalledWith(url);
  });
  it('should add books to cart', ()=> {
    const dispatchSpy = spyOn(store, 'dispatch');
    component.addIdToCart({id:''});
    expect(dispatchSpy).toHaveBeenCalledWith(
      addCartItem({cartItem: {id:''}} )
    );

  })
  it('should set store to null onNgDestroy', () => {
    component.ngOnDestroy();
    expect(component['store']).toBeNull();
  });
});
