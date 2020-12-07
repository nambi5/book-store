import * as request from 'request';
import { googleBookApiBaseUrl } from '../config/env.config';
import {Books, ItemsEntity} from '../models/book.model'

export const bookList = (req, res) => {
  request(
    `${googleBookApiBaseUrl}/volumes?q=${req?.params?.searchTerm}`,
    (error:Error, response:Books, body) => {
      try {
        res.send(JSON.parse(body));
      } catch (err) {
        res.send({ err, test: 'error' });
      }
    }
  );
};

export const bookById = (req, res) => {
  request(
    `${googleBookApiBaseUrl}/volumes/${req?.params?.id}`,
    (error:Error, response:Books, body) => {
      try {
        res.send({ data: JSON.parse(body) });
      } catch (err) {
        res.send({ err, test: 'error' });
      }
    }
  );
};
