const express = require('express');
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/speakers', speakersRoute());
  router.use('/feedback', feedbackRoute());

  return router;
};
