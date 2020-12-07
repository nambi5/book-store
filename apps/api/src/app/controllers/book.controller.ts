import * as request from 'request';
import { googleBookApiBaseUrl } from '../config/env.config';

export const bookList = (req, res) => {
  request(
    `${googleBookApiBaseUrl}/volumes?q=${req?.params?.searchTerm}`,
    (error, response, body) => {
      try {
        console.log(error, response, body);
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
    (error, response, body) => {
      try {
        console.log(error, response, body);
        res.send({ data: JSON.parse(body) });
      } catch (err) {
        res.send({ err, test: 'error' });
      }
    }
  );
};
