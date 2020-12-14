const superagent = require('superagent');
import { Book } from '@book-store/ui';
import { googleBookApiBaseUrl } from '../config/env.config';

export const getbookList = (req, res) => {
  try {
    if (!req?.params?.searchTerm) {
      throw { status: 400, message: 'Bad request' };
    }
    externalApiCall(req.params.searchTerm).end(
      (error: Error, response: any) => {
        if (error) {
          res.status(500).send(error.message);
          return;
        }
        let formattedBooks = filterBookInfo(response.body.items);
        res.send({ status: 200, response: formattedBooks });
      }
    );
  } catch (error) {
    res.status(error.status).send(error.message);
  }
};

export const externalApiCall = (searchTerm) => {
  return superagent.get(`${googleBookApiBaseUrl}/volumes?q=${searchTerm}`);
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
