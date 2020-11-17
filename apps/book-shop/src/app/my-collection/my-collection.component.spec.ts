import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { reducers, metaReducers } from '../store/reducers';

import { MyCollectionComponent } from './my-collection.component';

describe('MyCollectionComponent', () => {
  let component: MyCollectionComponent;
  let fixture: ComponentFixture<MyCollectionComponent>;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCollectionComponent],
      imports: [StoreModule.forRoot(reducers, { metaReducers })],
    }).compileComponents();
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
  it('should call getCollectionItems method from onInit', () => {
    spyOn(component, 'getCollectionItems');

    component.ngOnInit();
    expect(component.getCollectionItems).toHaveBeenCalled();
  });

  it('should load book details from getCollectionItems', () => {
    spyOn(store, 'select').and.returnValue(of({ book: { id: 123 } }));
    fixture.detectChanges();

    component.getCollectionItems();
    expect(component.booksList).toEqual({ book: { id: 123 } });
  });

  it('should return same description if character length is smaller than 120', () => {
    const book = {
      volumeInfo: {
        description:
          'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
      },
    };
    const funcCall = component.getDescription(book);
    expect(funcCall).toBe(book.volumeInfo.description);
  });
  it('should return same description if character length is larger than 120', () => {
    const book = {
      volumeInfo: {
        description:
          'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
      },
    };
    const funcCall = component.getDescription(book);
    expect(funcCall).toBe(book.volumeInfo.description.slice(0, 120) + '...');
  });
  it('should open on new tab when openPreviewLink called', () => {
    
    spyOn(window, 'open').and.callFake(function () {
      return true;
    });

    component.openPreviewLink("url");

    expect(window.open).toHaveBeenCalled();
    expect(window.open).toHaveBeenCalledWith("url");
  });
  it('should set store to null onNgDestroy', () => {
    component.ngOnDestroy();
    expect(component['store']).toBeNull();
  });
});
