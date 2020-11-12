import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { collectionItems } from '../state/selectors/book.selectors';

@Component({
  selector: 'book-store-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit {

  booksList: any;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(collectionItems).subscribe(
      (res) =>{
         console.log(res);
         this.booksList = res;
      }
    )
  }
  getDescription(book){
    if(book?.volumeInfo?.description?.length >120){
      return book?.volumeInfo?.description.slice(0,120) + '...';
    }else{
      return book?.volumeInfo?.description;
    }
  }
  openPreviewLink(url){
    window.open(url);
  }
}
