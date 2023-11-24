import express, { ErrorRequestHandler } from 'express';
import bodyParser from 'body-parser';
import postsRouter from './routes/posts.Route';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/v1', postsRouter);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(`UnExpected Error occured , plz try again later.`);
  return res.status(500).send('OOPS!');
};

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
