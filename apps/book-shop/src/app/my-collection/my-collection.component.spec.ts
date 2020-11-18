import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModule } from '@book-store/ui';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { CollectionFacade } from '../store/facade/collection.facade';
import { reducers, metaReducers } from '../store/reducers';

import { MyCollectionComponent } from './my-collection.component';

describe('MyCollectionComponent', () => {
  let component: MyCollectionComponent;
  let fixture: ComponentFixture<MyCollectionComponent>;
  let collectionFacade: CollectionFacade;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCollectionComponent],
      imports: [StoreModule.forRoot(reducers, { metaReducers }), UiModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCollectionComponent);
    component = fixture.componentInstance;
    collectionFacade = TestBed.inject(CollectionFacade);
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
      collectionFacade.collectionItemList$,
      'subscribe'
    ).and.callFake(() => of({ book: { id: 123 } }));
    fixture.detectChanges();

    component.getCollectionItems();
    expect(selectSpy).toHaveBeenCalled();
    collectionFacade.collectionItemList$.subscribe(() => {
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
