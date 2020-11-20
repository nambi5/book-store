import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemsEntity } from '../models/book-search.model';

@Component({
  selector: 'book-store-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() cardDetails: ItemsEntity;
  @Input() parentType: 'cart' | 'collection' | 'search';
  @Output() clickedCard = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  getDescription(): string {
    if (this.cardDetails?.volumeInfo?.description?.length > 120) {
      return this.cardDetails?.volumeInfo?.description.slice(0, 120) + '...';
    } else {
      return this.cardDetails?.volumeInfo?.description;
    }
  }
  emitClickedCard(id: string): void {
    this.clickedCard.emit(id);
  }
  getTitle(): string {
    return this.cardDetails?.volumeInfo?.title;
  }
  getImage(): string {
    return (
      this.cardDetails?.volumeInfo?.imageLinks?.smallThumbnail ||
      this.cardDetails?.volumeInfo?.imageLinks?.thumbnail
    );
  }
  getStringifiedAuthorsName(): string {
    return this.cardDetails?.volumeInfo?.authors?.toString();
  }
}
