import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { BookDetailComponent } from './book-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { UiModule } from '@book-store/ui';
describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailComponent],
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule,
        MatButtonModule,
        UiModule,
      ],
      providers: [{ provide: Router, useValue: { navigate: () => {} } }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
