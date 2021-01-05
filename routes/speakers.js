const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakerService } = params;

  router.get('/', async (req, res) => {
    const speakers = await speakerService.getList();
    res.json(speakers);
  });

  router.get('/:shortname', (req, res) => {
    res.send(`detail for ${req.params.shortname}`);
  });

  return router;
};
