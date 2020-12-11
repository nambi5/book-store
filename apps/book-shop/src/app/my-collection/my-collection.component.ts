import { Component, OnInit } from '@angular/core';
import {Book} from '@book-store/ui';
import { BookFacade } from '../store/facade/book.facade';
@Component({
  selector: 'book-store-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.scss'],
})
export class MyCollectionComponent implements OnInit {
  booksList: Book[];
  constructor(private bookFacade: BookFacade) {}

  ngOnInit(): void {
    this.getCollectionItems();
  }

  getCollectionItems(): void {
    this.bookFacade.collectionItemList$.subscribe(
      (res: Book[]) => {
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
