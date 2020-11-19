import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemsEntity } from '../models/book-search.model';

@Component({
  selector: 'book-store-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() cardDetails:ItemsEntity;
  @Input() parentType:'cart'|'collection'|'search';
  @Output() clickedCard =new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  getDescription(book){
    if(book?.volumeInfo?.description?.length >120){
      return book?.volumeInfo?.description.slice(0,120) + '...';
    }else{
      return book?.volumeInfo?.description;
    }
  }
  emitClickedCard(id){
    this.clickedCard.emit(id);
  }
  getTitle(cardDetails){
    return cardDetails?.volumeInfo?.title;
  }
  getImage(cardDetails){
    return cardDetails?.volumeInfo?.imageLinks?.smallThumbnail || cardDetails?.volumeInfo?.imageLinks?.thumbnail;
  }
  stringifyAuthorsName(cardDetails){
    return cardDetails?.volumeInfo?.authors?.toString();
  }
}
