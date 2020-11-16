import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@book-store/ui';
import { Store, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../store/reducers';

import { SearchPageComponent } from './search-page.component';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;
  let store:Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPageComponent ],
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule,FormsModule,MatFormFieldModule,MatInputModule,UiModule
      ],
      providers:[
        { provide: Router, useValue: { navigate: () => {} } },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
