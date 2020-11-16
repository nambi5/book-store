import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UiModule } from '@book-store/ui';
describe('AppComponent', () => {  
  let app: AppComponent;
  let store: Store;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
      RouterTestingModule,HttpClientTestingModule,UiModule
      ],
    }).compileComponents();
    store = TestBed.inject(Store);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    expect(app).toBeTruthy();
    expect(store).toBeTruthy();
  });

  it('should get cart items total length in onInit', async() => {
    store = TestBed.inject(Store);
    spyOn(store, 'select').and.returnValue(of(0));
    app.ngOnInit();
    expect(app.asyncCartLength).toEqual(0)
  })
});
