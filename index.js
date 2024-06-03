import express from 'express';

const PORT = 5000;
const app = express();

app.get('/', (req, res) => {
  console.log('LLL : ', req.query);
  res.status(200).json(`{RETURN: ${req.query.dataint}}`);
});

app.listen(PORT, () => {
  console.log('SERVER IS WORKING!!!');
});
