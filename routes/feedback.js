const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('pages/feedback');
  });

  router.post('/', (req, res) => {
    res.send('Feedback form posted');
  });

  return router;
};
