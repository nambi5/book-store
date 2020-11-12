import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartItems } from '../state/selectors/book.selectors';

@Component({
  selector: 'book-store-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  booksList: any;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(cartItems).subscribe(
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
}
