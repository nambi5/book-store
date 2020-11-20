import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { UiModule } from '@book-store/ui';
import { of } from 'rxjs';

import { BookFacade } from '../store/facade/book.facade';
import { reducers, metaReducers } from '../store/reducers';
import { MyCollectionComponent } from './my-collection.component';

describe('MyCollectionComponent', () => {
  let component: MyCollectionComponent;
  let fixture: ComponentFixture<MyCollectionComponent>;
  let bookFacade: BookFacade;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCollectionComponent],
      imports: [StoreModule.forRoot(reducers, { metaReducers }), UiModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectionComponent);
    component = fixture.componentInstance;
    bookFacade = TestBed.inject(BookFacade);
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

  it('should load book details from getCollectionItems', async () => {
    const selectSpy = spyOn(
      bookFacade.collectionItemList$,
      'subscribe'
    ).and.callFake(() => of({ book: { id: 123 } }));
    fixture.detectChanges();

    component.getCollectionItems();
    expect(selectSpy).toHaveBeenCalled();
    bookFacade.collectionItemList$.subscribe(() => {
      expect(component.booksList).toEqual({ book: { id: 123 } });
    });
  });

  it('should open on new tab when openPreviewLink called', () => {
    spyOn(window, 'open').and.callFake(function () {
      return true;
    });

    component.openPreviewLink('url');

    expect(window.open).toHaveBeenCalled();
    expect(window.open).toHaveBeenCalledWith('url');
  });
});
