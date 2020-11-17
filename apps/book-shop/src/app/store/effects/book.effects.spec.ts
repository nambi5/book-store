import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { EMPTY, Observable, of } from 'rxjs';
import { HttpApiService } from '../../services/http-api.service';

import { BookEffects } from './book.effects';
import * as bookAction from '../actions/book.actions';
import { Books } from '../../models/book-search.model';

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
    const dummyData:Books = {
      "kind": "books#volumes",
      "totalItems": 2075,
      "items": [
          {
            "kind": "books#volume",
            "id": "KzN_RQ_0CPQC",
            "etag": "QF8jScB4smc",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/KzN_RQ_0CPQC",
            "volumeInfo": {
              "title": "Mastering Autodesk 3ds Max Design 2010",
              "authors": [
                "Mark Gerhard",
                "Jeffrey Harper",
                "Jon McFarland"
              ],
              "publisher": "John Wiley & Sons",
              "publishedDate": "2011-03-11",
              "description": "The only comprehensive tutorial/reference exclusively devoted to Autodesk's robust architectural visualization software 3ds Max Design is a powerful real-time 3D design, modeling, and animation tool for architectural visualizations. This book covers all the software's crucial features, including how to simulate and analyze sun, sky, and artificial light-crucial factors for sustainable design-and how to define and assign realistic materials and work with AutoCAD and Revit files. You'll quickly learn how to get the most from this powerful software's 3D modeling, animation, and rendering capabilities. McFarland is an Autodesk Authorized Author with professional experience in creating complex visualizations for a large property development company. His real-world focus means workflows and instructions are professional and proven, and projects will include those that pros work on every day. Uses actual examples from the author's experience, including retail spaces, small offices, residential developments, and more Concise explanations, focused examples, step-by-step instructions, and hands-on tutorials teach the basics and fine points of the software Covers all the essential features, such as how to simulate and analyze sun, sky, and artificial light Demonstrates efficient use of the interface; how to work with Revit and AutoCAD files; using data, scene management, and solid modeling tools; rendering real-world surfaces; and setting up animated walkthroughs Mastering 3ds Max Design 2010 provides a practical education in using this powerful architectural visualization tool.",
              "industryIdentifiers": [
                {
                  "type": "ISBN_10",
                  "identifier": "1118059417"
                },
                {
                  "type": "ISBN_13",
                  "identifier": "9781118059418"
                }
              ],
              "readingModes": {
                "text": true,
                "image": true
              },
              "pageCount": 912,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "averageRating": 4,
              "ratingsCount": 1,
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.7.6.0.preview.3",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=KzN_RQ_0CPQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=KzN_RQ_0CPQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.in/books?id=KzN_RQ_0CPQC&pg=PA406&dq=max&hl=&cd=1&source=gbs_api",
              "infoLink": "https://play.google.com/store/books/details?id=KzN_RQ_0CPQC&source=gbs_api",
              "canonicalVolumeLink": "https://play.google.com/store/books/details?id=KzN_RQ_0CPQC"
            },
            "saleInfo": {
              "country": "IN",
              "saleability": "FOR_SALE",
              "isEbook": true,
              "listPrice": {
                "amount": 6059.3,
                "currencyCode": "INR"
              },
              "retailPrice": {
                "amount": 6059.3,
                "currencyCode": "INR"
              },
              "buyLink": "https://play.google.com/store/books/details?id=KzN_RQ_0CPQC&rdid=book-KzN_RQ_0CPQC&rdot=1&source=gbs_api",
              "offers": [
                {
                  "finskyOfferType": 1,
                  "listPrice": {
                    "amountInMicros": 6059300000,
                    "currencyCode": "INR"
                  },
                  "retailPrice": {
                    "amountInMicros": 6059300000,
                    "currencyCode": "INR"
                  }
                }
              ]
            },
            "accessInfo": {
              "country": "IN",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.co.in/books/download/Mastering_Autodesk_3ds_Max_Design_2010-sample-epub.acsm?id=KzN_RQ_0CPQC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.co.in/books/download/Mastering_Autodesk_3ds_Max_Design_2010-sample-pdf.acsm?id=KzN_RQ_0CPQC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "webReaderLink": "http://play.google.com/books/reader?id=KzN_RQ_0CPQC&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "Other Rollouts The Advanced Lighting Override rollout is used only for tweaking \u003cbr\u003e\nradiosity solutions and works the same as the Advanced Lighting Override \u003cbr\u003e\nmaterial from earlier versions of 3ds \u003cb\u003eMax\u003c/b\u003e. The SuperSampling rollout allows you \u003cbr\u003e\nto&nbsp;..."
            }
          },
          {
            "kind": "books#volume",
            "id": "S1cBEwQvcPMC",
            "etag": "ECiAx8pJ2Yk",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/S1cBEwQvcPMC",
            "volumeInfo": {
              "title": "Mastering Autodesk 3ds Max Design 2011",
              "authors": [
                "Mark Gerhard",
                "Jeffrey Harper"
              ],
              "publisher": "John Wiley & Sons",
              "publishedDate": "2010-07-28",
              "industryIdentifiers": [
                {
                  "type": "ISBN_10",
                  "identifier": "0470925590"
                },
                {
                  "type": "ISBN_13",
                  "identifier": "9780470925591"
                }
              ],
              "readingModes": {
                "text": true,
                "image": true
              },
              "pageCount": 912,
              "printType": "BOOK",
              "categories": [
                "Computers"
              ],
              "averageRating": 4,
              "ratingsCount": 1,
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.7.4.0.preview.3",
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=S1cBEwQvcPMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=S1cBEwQvcPMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.in/books?id=S1cBEwQvcPMC&pg=PA448&dq=max&hl=&cd=2&source=gbs_api",
              "infoLink": "http://books.google.co.in/books?id=S1cBEwQvcPMC&dq=max&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Mastering_Autodesk_3ds_Max_Design_2011.html?hl=&id=S1cBEwQvcPMC"
            },
            "saleInfo": {
              "country": "IN",
              "saleability": "NOT_FOR_SALE",
              "isEbook": false
            },
            "accessInfo": {
              "country": "IN",
              "viewability": "PARTIAL",
              "embeddable": true,
              "publicDomain": false,
              "textToSpeechPermission": "ALLOWED",
              "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.co.in/books/download/Mastering_Autodesk_3ds_Max_Design_2011-sample-epub.acsm?id=S1cBEwQvcPMC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.co.in/books/download/Mastering_Autodesk_3ds_Max_Design_2011-sample-pdf.acsm?id=S1cBEwQvcPMC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
              },
              "webReaderLink": "http://play.google.com/books/reader?id=S1cBEwQvcPMC&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "Then, after checking the appearance of the materials with a test rendering, you&#39;ll \u003cbr\u003e\nlook at ways to adjust the materials to better suit your model. Before you dive in, it \u003cbr\u003e\nis important to let 3ds \u003cb\u003eMax\u003c/b\u003e know where the dependent files are that you plan to&nbsp;..."
            }
          }
      ]
    };
    actions$ = of(bookAction.loadBooks);
    const spy = spyOn(service, 'getBooks').and.returnValue(
      of({ response: dummyData })
    );
    effects.loadBooks$.subscribe((action) => {
      expect(spy).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it('loadBooks$ Failed', async (done) => {
    const spy = spyOn(service, 'getBooks').and.throwError('Error');
    actions$ = of(bookAction.loadBooks);
    effects.loadBooks$.subscribe(() => {
      fail('Failed');
    },
      (err) => {
        // expect(err).toEqual(
        //   bookAction.loadBooksFailure({error: 'Error'}).error
        // );
        expect(spy).toHaveBeenCalledTimes(1);
        done();
      }
    );
  });
});
