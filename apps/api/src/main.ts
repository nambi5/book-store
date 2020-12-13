/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { router as bookRoute } from './app/routes/book.route';

export const app = express();
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/book', bookRoute);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
