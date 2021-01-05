const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
