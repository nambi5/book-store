import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '@book-store/ui';

@Component({
  selector: 'book-store-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() cardDetails: Book;
  @Input() parentType: 'cart' | 'collection' | 'search';
  @Output() clickedCard = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  getDescription(): string {
    if (this.cardDetails.description?.length > 120) {
      return this.cardDetails.description.slice(0, 120) + '...';
    } else {
      return this.cardDetails.description;
    }
  }
  emitClickedCard(id: string): void {
    this.clickedCard.emit(id);
  }
  getTitle(): string {
    return this.cardDetails.title;
  }
  getImage(): string {
    return (
      this.cardDetails.imageLinks?.smallThumbnail ||
      this.cardDetails.imageLinks?.thumbnail
    );
  }
  getStringifiedAuthorsName(): string {
    return this.cardDetails.authors?.toString();
  }
}
