import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { HttpApiService } from '../../services/http-api.service';

import { BookEffects } from './book.effects';

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
});
