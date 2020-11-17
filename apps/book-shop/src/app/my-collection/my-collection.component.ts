import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { collectionItems } from '../store/selectors/book.selectors';
import { collectionItemsFeatureKey } from '../store/reducers/collection-item.reducer';
@Component({
  selector: 'book-store-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit, OnDestroy {

  booksList: any;
  constructor(private store: Store<{collectionItemsFeatureKey: any}>) { }

  ngOnInit(): void {
    this.getCollectionItems();
  }

  getCollectionItems(){
    this.store?.select(collectionItems).subscribe(
      (res) =>{
        if(this.store){
          this.booksList = res;
        }
      }
    )
  }

  openPreviewLink(url){
    window.open(url);
  }

  ngOnDestroy(){
    if(this.store){
      this.store = null;
    }
  }
}
