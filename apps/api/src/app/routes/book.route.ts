import * as express from 'express';
import * as book from '../controllers/book.controller';
export const router = express.Router();

router.get('/search/:searchTerm',book.getbookList);
// router.get('/:id',book.bookById);

