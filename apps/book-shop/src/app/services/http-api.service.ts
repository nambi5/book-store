import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient) { }

  getBooks(searchTerm: string) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
  }
  // getBookDetailsById(id: string){    
  //   return this.http.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
  // }
}
