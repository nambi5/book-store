import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpApiService } from '../services/http-api.service';
import {Books, ItemsEntity} from '../models/book-search.model'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadBooks, setSearchTerm, setSelectedBook } from '../store/actions/book.actions';
import { bookList } from '../store/selectors/book.selectors'

import {BookFacade} from '../store/facade/book.facade';
@Component({
  selector: 'book-store-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {
  searchTerm;
  booksList;
  constructor(
    private router: Router,
    // private store: Store,
    private bookFacade:BookFacade
  ) { }

  ngOnInit(): void {
    this.getBookList();
  }
  getBookList(): void{
    this.bookFacade.bookList$.subscribe(
      (res) =>{
        if(res){
          this.booksList = res;
        }
      }
    )
  }
  searchSubmit(){
    this.bookFacade.lookBooks(this.searchTerm);
    this.bookFacade.setSearchTerm(this.searchTerm);
    // this.store?.dispatch(loadBooks({searchTerm: this.searchTerm}));    
    // this.store?.dispatch(setSearchTerm({data:this.searchTerm}));
  }
  
  
  navigateToDetailsPage(book){
    this.bookFacade.setSelectedBook(book);
    // this.store?.dispatch(setSelectedBook({data:book}));
    this.router.navigateByUrl(`/${book?.id}`)
  }
  ngOnDestroy(){
    // if(this.store){
    //   this.store = null;
    // }
  }
}
