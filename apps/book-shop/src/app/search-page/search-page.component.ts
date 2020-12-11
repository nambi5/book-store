import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Book} from '@book-store/ui';

import {BookFacade} from '../store/facade/book.facade';
@Component({
  selector: 'book-store-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchTerm: string;
  booksList: Book[];
  error$ = this.bookFacade.error$;
  constructor(
    private router: Router,
    private bookFacade:BookFacade
  ) { }

  ngOnInit(): void {
    this.getBookList();
  }
  getBookList(): void{
    this.bookFacade.bookList$.subscribe(
      (res: Book[]) =>{
        if(res){
          this.booksList = res;
        }
      }
    )
  }
  searchSubmit(){
    this.bookFacade.lookBooks(this.searchTerm);
    this.bookFacade.setSearchTerm(this.searchTerm);
  }
  
  
  navigateToDetailsPage(book: Book){
    this.bookFacade.setSelectedBook(book);
    this.router.navigateByUrl(`/${book?.id}`)
  }
 
}
