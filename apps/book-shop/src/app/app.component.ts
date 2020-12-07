import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { BookFacade } from './store/facade/book.facade';

@Component({
  selector: 'book-store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  asyncCartLength: Observable<number>;
  
  constructor(private bookFacade:BookFacade){}

  ngOnInit(){
    this.asyncCartLength = this.bookFacade.totalCartItemCount$;
  }

}
