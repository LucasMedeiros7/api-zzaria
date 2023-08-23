import express from 'express';
import { router } from './router';

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
router.registerRoutes(app);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
