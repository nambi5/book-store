import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { collectionItems } from '../store/selectors/book.selectors';
import { collectionItemsFeatureKey } from '../store/reducers/collection-item.reducer';
import { CollectionFacade } from '../store/facade/collection.facade';
@Component({
  selector: 'book-store-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss']
})
export class MyCollectionComponent implements OnInit, OnDestroy {

  booksList: any;
  constructor(private collectionFacade:CollectionFacade) { }

  ngOnInit(): void {
    this.getCollectionItems();
  }

  getCollectionItems(){
    this.collectionFacade.collectionItemList$.subscribe(
      (res) =>{
        if(res){
          this.booksList = res;
        }
      }
    )
  }

  openPreviewLink(url){
    window.open(url);
  }

  ngOnDestroy(){
    // if(this.store){
    //   this.store = null;
    // }
  }
}
