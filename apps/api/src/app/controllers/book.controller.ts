import * as request from 'request';
import { googleBookApiBaseUrl } from '../config/env.config';
import { ItemsEntity } from '@book-store/ui';

export const getbookList = (req, res, next) => {
  request(
    `${googleBookApiBaseUrl}/volumes?q=${req?.params?.searchTerm}`,
    (error: Error, response: any) => {
      try {
        if (error) {
          throw error;
        }
        const parsedResponse = JSON.parse(response.body);
        const returnResult = filterBookInfo(parsedResponse.items);
        res.send({ status: 200, response: returnResult });
      } catch (error) {
        res.status(500).send({message:'Something went wrong'})
        // next('Something went wrong');
      }
    }
  );
};

const filterBookInfo = (books: ItemsEntity[]) => {
  const essentialDataOfBooks = [];
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
    });
  });
  return essentialDataOfBooks;
};
