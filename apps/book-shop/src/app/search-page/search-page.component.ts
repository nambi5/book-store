import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpApiService } from '../services/http-api.service';
import {Books, ItemsEntity} from '../models/book-search.model'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadBooks, setSearchTerm, setSelectedBook } from '../store/actions/book.actions';
import { bookList } from '../store/selectors/book.selectors'
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
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getBookList();
  }
  getBookList(): void{
    this.store?.select(bookList).subscribe(
      (res) =>{
        if(res && this.store){
          this.booksList = res;
        }
      }
    )
  }
  searchSubmit(){
    console.log(this.searchTerm);
    this.store?.dispatch(loadBooks({searchTerm: this.searchTerm}));    
    this.store?.dispatch(setSearchTerm({data:this.searchTerm}));
  }
  
  getDescription(book){
    if(book?.volumeInfo?.description?.length >120){
      return book?.volumeInfo?.description.slice(0,120) + '...';
    }else{
      return book?.volumeInfo?.description;
    }
  }
  navigateToDetailsPage(book){
    this.store?.dispatch(setSelectedBook({data:book}));
    this.router.navigateByUrl(`/${book?.id}`)
  }
  ngOnDestroy(){
    if(this.store){
      this.store = null;
    }
  }
}
