const path = require('path');
const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));
app.use('/', routes());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
