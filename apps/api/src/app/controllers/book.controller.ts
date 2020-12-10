import * as request from 'request';
import { googleBookApiBaseUrl } from '../config/env.config';
import {Books, ItemsEntity} from '@book-store/ui';

export const getbookList = (req, res) => {
  request(
    `${googleBookApiBaseUrl}/volumes?q=${req?.params?.searchTerm}`,
    (error:Error, response:Books, body) => {
      try {
        const parsedResponse = JSON.parse(body);
        const returnResult = filterBookInfo(parsedResponse.items)
        res.send({status:200,response:returnResult});
      } catch (err) {
        res.send({ err, test: 'error' });
      }
    }
  );
};

const filterBookInfo = (books:ItemsEntity[])=>{
  const essentialDataOfBooks =[];
  books.forEach((book)=>{
    essentialDataOfBooks.push(
      {
        id:book.id,
        title:book.volumeInfo.title,
        description:book.volumeInfo.description,
        imageLinks:book.volumeInfo.imageLinks,
        authors:book.volumeInfo.authors,
        averageRating:book.volumeInfo.averageRating,
        publisher:book.volumeInfo?.publisher,
        pageCount:book.volumeInfo?.pageCount,
        language:book.volumeInfo?.language
      }
    )
  });
  return essentialDataOfBooks;
}

// export const bookById = (req, res) => {
//   request(
//     `${googleBookApiBaseUrl}/volumes/${req?.params?.id}`,
//     (error:Error, response:Books, body) => {
//       try {
//         res.send({ data: JSON.parse(body) });
//       } catch (err) {
//         res.send({ err, test: 'error' });
//       }
//     }
//   );
// };
