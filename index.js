import express from 'express';
import cors from 'cors';
import { rateLimit } from 'express-rate-limit';

const PORT = 5000;
const MS_COEFFICIENT = 1000;

const app = express();

const limiter = rateLimit({
  windowMs: 1000,
  limit: 50,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: 'LIMIT__ERROR',
});

app.use(limiter);
app.use(cors());

app.get('/api', (req, res) => {
  const delay = Math.random * MS_COEFFICIENT;

  setTimeout(() => {
    const itemRef = +req.query.itemRef;

    res.status(200).json(itemRef);
  }, delay);
});

app.listen(PORT, () => {
  console.log('SERVER IS WORKING!!!');
});
