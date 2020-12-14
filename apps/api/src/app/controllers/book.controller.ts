import * as request from 'request';
import { Book } from '@book-store/ui';
import { googleBookApiBaseUrl } from '../config/env.config';

export const requestExternalAPI = request;

export const getbookList = (req, res, next) => {
  try {
    if (!req?.params?.searchTerm) {
      throw {code:400,error:'Bad request'};
    }
    externalApiCall(req,res);
  } catch (error) {
    res.status(error.code).send(error.error);
  }
};

export const externalApiCall = (req,res) => {
  requestExternalAPI(
    `${googleBookApiBaseUrl}/volumes?q=${req?.params?.searchTerm}`,
    (error: Error, response: any) => {
      try {
        if (error) {
          throw {code:500,error};
        }
        const parsedResponse = JSON.parse(response.body);
        const returnResult = filterBookInfo(parsedResponse.items);
        res.send({ status: 200, response: returnResult });
      } catch (error) {
        throw {code:500,error};
      }
    }
  );
};
export const filterBookInfo = (books: any[]) => {
  const essentialDataOfBooks: Book[] = [];
  books.forEach((book) => {
    essentialDataOfBooks.push({
      id: book.id,
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      imageLinks: book.volumeInfo.imageLinks,
      authors: book.volumeInfo.authors,
      averageRating: book.volumeInfo.averageRating,
      publisher: book.volumeInfo?.publisher,
      pageCount: book.volumeInfo?.pageCount,
      language: book.volumeInfo?.language,
      previewLink: book.volumeInfo.previewLink,
    });
  });
  return essentialDataOfBooks;
};
