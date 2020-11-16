import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@book-store/ui';
import { Store, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../store/reducers';

import { MyCartComponent } from './my-cart.component';

describe('MyCartComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;
  let router: Router;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCartComponent],
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
    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
