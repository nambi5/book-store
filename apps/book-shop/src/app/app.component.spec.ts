import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UiModule } from '@book-store/ui';
import { BookFacade } from './store/facade/book.facade';
describe('AppComponent', () => {  
  let app: AppComponent;
  let bookFacade: BookFacade;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
      RouterTestingModule,HttpClientTestingModule,UiModule
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    bookFacade = TestBed.inject(BookFacade);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    expect(app).toBeTruthy();
    expect(bookFacade).toBeTruthy();
  });

  it('should get cart items total length in onInit', async() => {
    // bookFacade = TestBed.inject(Store);
    spyOn(bookFacade, 'totalCartItemCount$').and.returnValue(of(1));
    app.ngOnInit();
    app.asyncCartLength.subscribe(
      (res)=>{
        expect(res).toEqual(1)
      }
    )
  })
});
