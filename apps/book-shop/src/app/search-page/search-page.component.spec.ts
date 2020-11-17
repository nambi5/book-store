import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@book-store/ui';
import { Store, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPageComponent } from './search-page.component';
import { loadBooks, setSearchTerm } from '../store/actions/book.actions';
import { of } from 'rxjs';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let store: Store;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchPageComponent],
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        UiModule,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: Router, useValue: { navigateByUrl: () => {} } }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call navigatebyURl function when navigateToDetailsPage clicked', () => {
    const url = {id:'123'};
    spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));
    component.navigateToDetailsPage(url);

    expect(router.navigateByUrl).toHaveBeenCalledWith('/123');
  });
  it('should set store to null onNgDestroy', () => {
    component.ngOnDestroy();
    expect(component['store']).toBeNull();
  });
  it('should return same description if character length is smaller than 120', () => {
    const book = {
      volumeInfo: {
        description:
          'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
      },
    };
    const funcCall = component.getDescription(book);
    expect(funcCall).toBe(book.volumeInfo.description);
  });
  it('should return same description if character length is larger than 120', () => {
    const book = {
      volumeInfo: {
        description:
          'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
      },
    };
    const funcCall = component.getDescription(book);
    expect(funcCall).toBe(book.volumeInfo.description.slice(0,120)+"...");
  });
  it('should search for books on searchSubmit',()=>{
    const dispatchSpy = spyOn(store, 'dispatch');
    component.searchTerm = "test";
    component.searchSubmit();
    expect(dispatchSpy).toHaveBeenCalledWith(
      loadBooks({searchTerm:"test"})
    );
  })
  it('should setSearchTerm for books on searchSubmit',()=>{
    const dispatchSpy = spyOn(store, 'dispatch');
    component.searchTerm = "test";
    component.searchSubmit();
    expect(dispatchSpy).toHaveBeenCalledWith(
      setSearchTerm({data:"test"})
    );
  })
});
