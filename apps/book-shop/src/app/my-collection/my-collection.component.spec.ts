import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../store/reducers';

import { MyCollectionComponent } from './my-collection.component';

describe('MyCollectionComponent', () => {
  let component: MyCollectionComponent;
  let fixture: ComponentFixture<MyCollectionComponent>;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCollectionComponent ],
      imports: [ 
        StoreModule.forRoot(reducers, { metaReducers })
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectionComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
