import express from 'express';
import { pizzaRouter } from './routes';

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use('/pizza', pizzaRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is Fire at http://localhost:${port}`);
});
