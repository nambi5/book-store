import { ItemsEntity } from '../models/book-search.model';

export const fakeBookForTesting:ItemsEntity = {
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