import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../services/http-api.service';

@Component({
  selector: 'book-store-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  constructor(
    private httpService: HttpApiService,
  ) { }

  ngOnInit(): void {
    this.httpService.getBookDetailsById('');
  }

}
