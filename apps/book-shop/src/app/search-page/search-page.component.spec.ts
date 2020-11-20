import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { StoreModule } from '@ngrx/store';
import { UiModule } from '@book-store/ui';

import { reducers, metaReducers } from '../store/reducers';
import { SearchPageComponent } from './search-page.component';
import { BookFacade } from '../store/facade/book.facade';
import { ItemsEntity } from '../models/book-search.model';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let bookFacade: BookFacade;
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
      providers: [{ provide: Router, useValue: { navigateByUrl: () => {} } },BookFacade],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    bookFacade = TestBed.inject(BookFacade);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call navigatebyURl function when navigateToDetailsPage clicked', () => {
    const url = {id:'123'};
    spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));
    component.navigateToDetailsPage(url as ItemsEntity);

    expect(router.navigateByUrl).toHaveBeenCalledWith('/123');
  });
  it('should search for books on searchSubmit',()=>{
    const dispatchSpy = spyOn(bookFacade, 'lookBooks');
    component.searchTerm = "test";
    component.searchSubmit();
    expect(dispatchSpy).toHaveBeenCalledWith("test");
    
  })
  it('should setSearchTerm for books on searchSubmit',()=>{
    const dispatchSpy = spyOn(bookFacade, 'setSearchTerm');
    component.searchTerm = "test";
    component.searchSubmit();
    expect(dispatchSpy).toHaveBeenCalledWith('test')
  })
});
