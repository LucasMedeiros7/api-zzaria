import express, { Request, Response, Application } from 'express';
import { registerRoutes } from './router';

const app: Application = express();
const port = process.env.PORT || 5050;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to APIzzaria');
});

registerRoutes(app);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});