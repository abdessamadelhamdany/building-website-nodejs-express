const path = require('path');
const express = require('express');
const cookieSession = require('cookie-session');
const createError = require('http-errors');
const bodyParser = require('body-parser');

const FeedbackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeakerService('./data/speakers.json');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.set('trust proxy', 1);
app.use(
  cookieSession({
    name: 'session',
    keys: ['hdhjdshkdsjk', 'dhjdsjlaakls'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.locals.siteName = 'Roux Meetups';

app.use(express.static(path.join(__dirname, './static')));
app.use(async (req, res, next) => {
  try {
    const names = await speakerService.getNames();
    res.locals.speakerNames = names;
    return next();
  } catch (err) {
    return next(err);
  }
});
app.use('/', routes({ feedbackService, speakerService }));

app.use((req, res, next) => next(createError(404, 'The page you requested was not found.')));

app.use((err, req, res, next) => {
  console.error(err);
  const { status = 500, message } = err;
  return res.render('error', { status, message });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
