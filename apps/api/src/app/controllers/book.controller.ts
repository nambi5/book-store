import * as request from 'request';
import { googleBookApiBaseUrl } from '../config/env.config';

export const getbookList = (req, res, next) => {
  if(!req?.params?.searchTerm){
    res.status(400).send('Bad request');
    return;
  }
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
      }
    }
  );
};

const filterBookInfo = (books: any[]) => {
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
      previewLink:book.volumeInfo.previewLink
    });
  });
  return essentialDataOfBooks;
};
