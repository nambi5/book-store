import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { EMPTY, Observable, of } from 'rxjs';
import { HttpApiService } from '../../services/http-api.service';

import { BookEffects } from './book.effects';
import * as bookAction from '../actions/book.actions';
import { Books, ItemsEntity } from '../../models/book-search.model';
import { fakeBooksForTesting } from '../../fake-db/books';

describe('BookEffects', () => {
  let actions$: Observable<any>;
  let effects: BookEffects;
  let service:HttpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BookEffects,
        HttpApiService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(BookEffects);
    actions$ = TestBed.inject(Actions);
    service = TestBed.inject(HttpApiService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
  it('loadBooks$ success', async(done) => {
    const dummyData:Books = fakeBooksForTesting;
    actions$ = of(bookAction.loadBooks);
    const spy = spyOn(service, 'getBooks').and.returnValue(
      of({ ...dummyData })
    );
    effects.loadBooks$.subscribe((data) => {
      expect(spy).toHaveBeenCalledTimes(1);
      expect(data).toEqual(
          bookAction.loadBooksSuccess({response:(dummyData.items)})
        );
      done();
    });
  });

  it('loadBooks$ Failed', async (done) => {
    const spy = spyOn(service, 'getBooks').and.throwError('error');
    actions$ = of(bookAction.loadBooks);
    effects.loadBooks$.subscribe(() => {
      fail('Failed');
    },
      (err) => {
        expect(err).toEqual(
          bookAction.loadBooksFailure({error: err}).error
        );
        expect(spy).toHaveBeenCalledTimes(1);
        done();
      }
    );
  });
});
