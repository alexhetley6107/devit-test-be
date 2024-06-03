import express from 'express';
import cors from 'cors';

const PORT = 5000;
const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  console.log('LLL : ', req.query);
  res.status(200).json(+req.query.itemRef);
});

app.listen(PORT, () => {
  console.log('SERVER IS WORKING!!!');
});
