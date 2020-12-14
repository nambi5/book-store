import { Book } from "@book-store/ui"

export const books = 
  {
    "kind": "books#volumes",
    "totalItems": 1526,
    "items": [
      {
        "kind": "books#volume",
        "id": "Pqcesk8iZzMC",
        "etag": "/6TMGMDUyxg",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/Pqcesk8iZzMC",
        "volumeInfo": {
          "title": "Charpy Impact Test",
          "subtitle": "Factors and Variables",
          "authors": ["John M. Holt"],
          "publisher": "ASTM International",
          "publishedDate": "1990",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0803112955"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780803112957"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 214,
          "printType": "BOOK",
          "categories": ["Compliance"],
          "averageRating": 5,
          "ratingsCount": 1,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.2.2.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=Pqcesk8iZzMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=Pqcesk8iZzMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.co.in/books?id=Pqcesk8iZzMC&pg=PA193&dq=test&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.co.in/books?id=Pqcesk8iZzMC&dq=test&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Charpy_Impact_Test.html?hl=&id=Pqcesk8iZzMC"
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
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=Pqcesk8iZzMC&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "John M. Holt, Editor, American Society for \u003cb\u003eTesting\u003c/b\u003e and Materials, Philadelphia, \u003cbr\u003e\n1990. ABSTRACT: The Charpy V-notch (CVN) impact \u003cb\u003etest\u003c/b\u003e is used extensively for \u003cbr\u003e\ndetermining the toughness of structural materials . Research programs in many&nbsp;..."
        }
      }
    ]
  }

export const formattedBooks:Book[]=[{
  id:'Pqcesk8iZzMC',
  title:'Charpy Impact Test',
  imageLinks: {
    "smallThumbnail": "http://books.google.com/books/content?id=Pqcesk8iZzMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=Pqcesk8iZzMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  description:undefined,
  authors: ["John M. Holt"],
  averageRating: 5,
  publisher: 'ASTM International',
  pageCount: 214,
  language: 'en',
  previewLink:"http://books.google.co.in/books?id=Pqcesk8iZzMC&pg=PA193&dq=test&hl=&cd=1&source=gbs_api"
}]