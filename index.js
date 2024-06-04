import express from 'express';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';

const PORT = 5000;
const app = express();
const MS_KOEF = 1000;

const limiter = rateLimit({
  windowMs: 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: 'LIMIT__ERROR',
});

app.use(limiter);
app.use(cors());

app.get('/api', (req, res) => {
  const delay = Math.random * MS_KOEF;

  setTimeout(() => {
    const itemRef = +req.query.itemRef;
    if (itemRef !== 100) {
      res.status(200).json(itemRef);
    } else {
      res.status(429).json(null);
    }
  }, delay);
});

app.listen(PORT, () => {
  console.log('SERVER IS WORKING!!!');
});
