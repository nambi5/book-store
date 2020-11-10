import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../services/http-api.service';
import {Books, ItemsEntity} from '../models/book-search.model.ts'
import { Router } from '@angular/router';

@Component({
  selector: 'book-store-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchTerm;
  booksList: ItemsEntity[];
  constructor(
    private httpService: HttpApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  searchSubmit(){
    console.log(this.searchTerm);
    this.httpService.getBooks(this.searchTerm).subscribe(
      (res:Books) =>{
        console.log(res);
        this.booksList = res.items;
      }
    );
  }

  getDescription(book){
    if(book?.volumeInfo?.description?.length >120){
      return book?.volumeInfo?.description.slice(0,120) + '...';
    }else{
      return book?.volumeInfo?.description;
    }
  }
  navigateToDetailsPage(id){
    this.router.navigateByUrl(`/${id}`)
  }
}
