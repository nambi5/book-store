import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { UiModule } from '@book-store/ui';
import { of } from 'rxjs';

import { reducers, metaReducers } from '../store/reducers';
import { BillingInfoComponent } from './billing-info.component';
import { BookFacade } from '../store/facade/book.facade';
import { ItemsEntity } from '../models/book-search.model';
describe('BillingInfoComponent', () => {
  let component: BillingInfoComponent;
  let fixture: ComponentFixture<BillingInfoComponent>;
  let bookFacade: BookFacade;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BillingInfoComponent],
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        RouterTestingModule,
        HttpClientTestingModule,
        UiModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
      providers: [{ provide: Router, useValue: { navigateByUrl: () => {} } },HttpClient],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(BillingInfoComponent);
    component = fixture.componentInstance;
    bookFacade = TestBed.inject(BookFacade);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load billing details  in OnInit', () => {
    spyOn(component, 'getBillingDetails');
    component.ngOnInit();
    expect(component.getBillingDetails).toBeCalled();
  });
  it('should load  selectedBook in OnInit', () => {
    spyOn(component, 'getSelectedBook');
    component.ngOnInit();
    expect(component.getSelectedBook).toBeCalled();
  });
  it('should get selected book details from store', () => {
    const dummyData = {
      kind: 'books#volume',
      id: 'nHnOERqf-MQC',
      etag: 'xWK/AG8XgaM',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/nHnOERqf-MQC',
      volumeInfo: {
        title: 'India',
        authors: ['Stanley A. Wolpert'],
        publisher: 'Univ of California Press',
        publishedDate: '1999-01-01',
        description:
          '"To all of us who delightedly and sometimes repetitively call ourselves Old India hands, Stanley Wolpert is the acknowledged authority. This book tells why. Indian history, art, culture, and contemporary politics are here in accurate, wide-ranging, and lucid prose."--John Kenneth Galbraith',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '0520221729',
          },
          {
            type: 'ISBN_13',
            identifier: '9780520221727',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 273,
        printType: 'BOOK',
        categories: ['History'],
        averageRating: 3.5,
        ratingsCount: 4,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.2.5.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=nHnOERqf-MQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=nHnOERqf-MQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=nHnOERqf-MQC&printsec=frontcover&dq=india&hl=&cd=3&source=gbs_api',
        infoLink:
          'http://books.google.co.in/books?id=nHnOERqf-MQC&dq=india&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/India.html?hl=&id=nHnOERqf-MQC',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IN',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.in/books/download/India-sample-epub.acsm?id=nHnOERqf-MQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=nHnOERqf-MQC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '&quot;To all of us who delightedly and sometimes repetitively call ourselves Old India hands, Stanley Wolpert is the acknowledged authority. This book tells why.',
      },
    };
    spyOn(bookFacade.selectedBook$, 'subscribe').and.returnValue(of(dummyData));
    component.getSelectedBook();
    bookFacade.selectedBook$.subscribe(()=>{
      expect(component.selectedBook).toEqual(dummyData);
    })
  });
  it('should get Cart items from from store', () => {
    const dummyData = {
      kind: 'books#volume',
      id: 'nHnOERqf-MQC',
      etag: 'xWK/AG8XgaM',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/nHnOERqf-MQC',
      volumeInfo: {
        title: 'India',
        authors: ['Stanley A. Wolpert'],
        publisher: 'Univ of California Press',
        publishedDate: '1999-01-01',
        description:
          '"To all of us who delightedly and sometimes repetitively call ourselves Old India hands, Stanley Wolpert is the acknowledged authority. This book tells why. Indian history, art, culture, and contemporary politics are here in accurate, wide-ranging, and lucid prose."--John Kenneth Galbraith',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '0520221729',
          },
          {
            type: 'ISBN_13',
            identifier: '9780520221727',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 273,
        printType: 'BOOK',
        categories: ['History'],
        averageRating: 3.5,
        ratingsCount: 4,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.2.5.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=nHnOERqf-MQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=nHnOERqf-MQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=nHnOERqf-MQC&printsec=frontcover&dq=india&hl=&cd=3&source=gbs_api',
        infoLink:
          'http://books.google.co.in/books?id=nHnOERqf-MQC&dq=india&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/India.html?hl=&id=nHnOERqf-MQC',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IN',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.in/books/download/India-sample-epub.acsm?id=nHnOERqf-MQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=nHnOERqf-MQC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '&quot;To all of us who delightedly and sometimes repetitively call ourselves Old India hands, Stanley Wolpert is the acknowledged authority. This book tells why.',
      },
    };
    spyOn(bookFacade.selectedBook$, 'subscribe').and.returnValue(of([dummyData]));
    component.getCartItemts();
    bookFacade.listCartItems$.subscribe(()=>{
      expect(component.cartItems).toEqual([dummyData]);
    })
  });
  it('should add billing details to collection when form is valid', ()=>{
    const dispatchSpy = spyOn(bookFacade,'addBillingDetails');
    const dummyValue = {name: "nambi", email: "nambi@testing.com", phone: "8870", address: "address"};
    component.billingForm.setValue(dummyValue);
    component.addBillingInfo();
    expect(dispatchSpy).toHaveBeenCalledWith(dummyValue);
  });
  it('should not add billing details to collection when form is invalid', ()=>{
    const dispatchSpy = spyOn(bookFacade,'addBillingDetails');
    const dummyValue = {name: "nambi", email: "nambi@testing.com", phone: "8870", address: "address"};
    component.addBillingInfo();
    expect(dispatchSpy).not.toHaveBeenCalledWith(dummyValue);
  });
  it('should add selected value to store collection ',()=>{
    spyOn(component,'addSelectedItemToCollection');
    Object.defineProperty(component.billingForm,'valid',{value:true,writable:true});
    const dummyData = {
      kind: 'books#volume',
      id: 'nHnOERqf-MQC',
      etag: 'xWK/AG8XgaM',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/nHnOERqf-MQC',
      volumeInfo: {
        title: 'India',
        authors: ['Stanley A. Wolpert'],
        publisher: 'Univ of California Press',
        publishedDate: '1999-01-01',
        description:
          '"To all of us who delightedly and sometimes repetitively call ourselves Old India hands, Stanley Wolpert is the acknowledged authority. This book tells why. Indian history, art, culture, and contemporary politics are here in accurate, wide-ranging, and lucid prose."--John Kenneth Galbraith',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '0520221729',
          },
          {
            type: 'ISBN_13',
            identifier: '9780520221727',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 273,
        printType: 'BOOK',
        categories: ['History'],
        averageRating: 3.5,
        ratingsCount: 4,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.2.5.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=nHnOERqf-MQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=nHnOERqf-MQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=nHnOERqf-MQC&printsec=frontcover&dq=india&hl=&cd=3&source=gbs_api',
        infoLink:
          'http://books.google.co.in/books?id=nHnOERqf-MQC&dq=india&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/India.html?hl=&id=nHnOERqf-MQC',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IN',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.in/books/download/India-sample-epub.acsm?id=nHnOERqf-MQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=nHnOERqf-MQC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '&quot;To all of us who delightedly and sometimes repetitively call ourselves Old India hands, Stanley Wolpert is the acknowledged authority. This book tells why.',
      },
    };
    component.selectedBook = dummyData;
    component.addBillingInfo();
    expect(component.addSelectedItemToCollection).toHaveBeenCalled();
  })
  it('should add selected value to store collection ',()=>{
    spyOn(component,'addCartItemToCollection');
    Object.defineProperty(component.billingForm,'valid',{value:true,writable:true});
    component.addBillingInfo();
    expect(component.addCartItemToCollection).toHaveBeenCalled()
  })
  it('should select cartitems and assign to collection', ()=>{
    spyOn(component,'navigateToCollection');
    
    const dummyData:ItemsEntity = {
      kind: 'books#volume',
      id: 'nHnOERqf-MQC',
      etag: 'xWK/AG8XgaM',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/nHnOERqf-MQC',
      volumeInfo: {
        title: 'India',
        authors: ['Stanley A. Wolpert'],
        publisher: 'Univ of California Press',
        publishedDate: '1999-01-01',
        description:
          '"To all of us who delightedly and sometimes repetitively call ourselves Old India hands, Stanley Wolpert is the acknowledged authority. This book tells why. Indian history, art, culture, and contemporary politics are here in accurate, wide-ranging, and lucid prose."--John Kenneth Galbraith',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '0520221729',
          },
          {
            type: 'ISBN_13',
            identifier: '9780520221727',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 273,
        printType: 'BOOK',
        categories: ['History'],
        averageRating: 3.5,
        ratingsCount: 4,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.2.5.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=nHnOERqf-MQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=nHnOERqf-MQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=nHnOERqf-MQC&printsec=frontcover&dq=india&hl=&cd=3&source=gbs_api',
        infoLink:
          'http://books.google.co.in/books?id=nHnOERqf-MQC&dq=india&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/India.html?hl=&id=nHnOERqf-MQC',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IN',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.in/books/download/India-sample-epub.acsm?id=nHnOERqf-MQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=nHnOERqf-MQC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '&quot;To all of us who delightedly and sometimes repetitively call ourselves Old India hands, Stanley Wolpert is the acknowledged authority. This book tells why.',
      },
    };
    component.cartItems = [dummyData];
    const dispatchSpy = spyOn(bookFacade, 'addItemsToCollection');
    component.addCartItemToCollection();
    expect(dispatchSpy).toHaveBeenCalledWith([dummyData]);
    expect(component.navigateToCollection).toHaveBeenCalled();
  });
  it('should add selected item to collection',() =>{
    spyOn(component, 'navigateToCollection');
    const dummyData:ItemsEntity = {
      kind: 'books#volume',
      id: 'nHnOERqf-MQC',
      etag: 'xWK/AG8XgaM',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/nHnOERqf-MQC',
      volumeInfo: {
        title: 'India',
        authors: ['Stanley A. Wolpert'],
        publisher: 'Univ of California Press',
        publishedDate: '1999-01-01',
        description:
          '"To all of us who delightedly and sometimes repetitively call ourselves Old India hands, Stanley Wolpert is the acknowledged authority. This book tells why. Indian history, art, culture, and contemporary politics are here in accurate, wide-ranging, and lucid prose."--John Kenneth Galbraith',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '0520221729',
          },
          {
            type: 'ISBN_13',
            identifier: '9780520221727',
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 273,
        printType: 'BOOK',
        categories: ['History'],
        averageRating: 3.5,
        ratingsCount: 4,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.2.5.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=nHnOERqf-MQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=nHnOERqf-MQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=nHnOERqf-MQC&printsec=frontcover&dq=india&hl=&cd=3&source=gbs_api',
        infoLink:
          'http://books.google.co.in/books?id=nHnOERqf-MQC&dq=india&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/India.html?hl=&id=nHnOERqf-MQC',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'IN',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.co.in/books/download/India-sample-epub.acsm?id=nHnOERqf-MQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=nHnOERqf-MQC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '&quot;To all of us who delightedly and sometimes repetitively call ourselves Old India hands, Stanley Wolpert is the acknowledged authority. This book tells why.',
      },
    };
    component.selectedBook = dummyData;
    const dispatchSpy = spyOn(bookFacade, 'addItemToCollection');
    component.addSelectedItemToCollection();
    expect(dispatchSpy).toHaveBeenCalledWith(dummyData);
    expect(component.navigateToCollection).toHaveBeenCalled();

  })
  it('should call navigatebyURl function when navigateToCollection clicked', ()=>{
    const url = 'collection';
    spyOn(router, 'navigateByUrl').and.returnValue(Promise.resolve(true));
    component.navigateToCollection();

    expect(router.navigateByUrl).toHaveBeenCalledWith(url);
  });
});
