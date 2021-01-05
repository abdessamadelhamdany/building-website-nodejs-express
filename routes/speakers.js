const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('pages/speakers');
  });

  router.get('/:shortname', (req, res) => {
    res.send(`detail for ${req.params.shortname}`);
  });

  return router;
};
