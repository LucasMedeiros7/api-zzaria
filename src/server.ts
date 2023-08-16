import express, { Request, Response, Application } from 'express';

const app: Application = express();
const port = process.env.PORT || 5050;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to APIzzaria');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});