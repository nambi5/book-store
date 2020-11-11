import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../services/http-api.service';
import {Books, ItemsEntity} from '../models/book-search.model'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadBooks, setSearchTerm, setSelectedBookId } from '../state/actions/book.actions';
import { bookList } from '../state/selectors/book.selectors'
@Component({
  selector: 'book-store-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchTerm;
  booksList: ItemsEntity[];
  constructor(
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    // this.httpService.getBooks(this.searchTerm).subscribe(
    //   (res:Books) =>{
    //     console.log(res);
    //     this.booksList = res.items;
    //   }
    // );
    this.store.select(bookList).subscribe(
      (res) =>{
        console.log(res);
        if(res){

          this.booksList = res;
        }
      }
    )

  }
  searchSubmit(){
    console.log(this.searchTerm);
    this.store.dispatch(loadBooks({searchTerm: this.searchTerm}));    
    this.store.dispatch(setSearchTerm({data:this.searchTerm}));
  }
  
  getDescription(book){
    if(book?.volumeInfo?.description?.length >120){
      return book?.volumeInfo?.description.slice(0,120) + '...';
    }else{
      return book?.volumeInfo?.description;
    }
  }
  navigateToDetailsPage(id){
    this.store.dispatch(setSelectedBookId({data:id}));
    this.router.navigateByUrl(`/${id}`)
  }
}
