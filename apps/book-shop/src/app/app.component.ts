import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartItemId, cartLength } from './store/selectors/book.selectors';

@Component({
  selector: 'book-store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  asyncCartLength: number;
  constructor(private store: Store){
    
  }
  ngOnInit(){
    this.store.select(cartLength).subscribe(
      (res)=>{
        this.asyncCartLength = res;
      }
    );
  }

}
