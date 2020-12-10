import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpApiService } from '../../services/http-api.service';

import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as bookAction from '../actions/book.actions';

import {Books} from '../../models/book-search.model'
import { props } from '@ngrx/store';

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(bookAction.loadBooks),
    mergeMap((param) => this.httpApiService.getBooks(param.searchTerm)
      .pipe(
        map((books: any) => ( 
          bookAction.loadBooksSuccess( books )
        )),
        catchError(
          () => of(bookAction.loadBooksFailure({error:'error'}))
          
        )
      ))
    )
  );

  constructor(private actions$: Actions,
    private httpApiService: HttpApiService) {}

}
