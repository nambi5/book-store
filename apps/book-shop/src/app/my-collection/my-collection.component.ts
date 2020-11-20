import { Component, OnInit } from '@angular/core';
import { ItemsEntity } from '../models/book-search.model';
import { BookFacade } from '../store/facade/book.facade';
@Component({
  selector: 'book-store-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss'],
})
export class MyCollectionComponent implements OnInit {
  booksList: ItemsEntity[];
  constructor(private bookFacade: BookFacade) {}

  ngOnInit(): void {
    this.getCollectionItems();
  }

  getCollectionItems(): void {
    this.bookFacade.collectionItemList$.subscribe(
      (res: ItemsEntity[]) => {
        if (res) {
          this.booksList = res;
        }
      }
    );
  }

  openPreviewLink(url: string) {
    window.open(url);
  }
}
