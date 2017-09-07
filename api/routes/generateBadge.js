const express = require('express');
const router = express.Router();
const models  = require('../models');
const reflix = require('../lib/reflix');

/* GET home page. */
router.post('/', function(req, res, next) {

	// get upload record
  models.Upload.findById(req.body.upload_id)

  // create badge
  .then(upload => {

    // upload may not exist, that's OK

    return reflix.generate(upload, req.body.story);
  })

  // create and return badge details
  .then(badge => {

    return models.Badge.create({
      upload_id: req.body.upload_id,
      story: req.body.story,
      image: badge.image,
      opengraph: badge.opengraph
    });

  })
  .then(badgeRecord => {

    setTimeout(() => {
      res.json(badgeRecord.get())
    }, 30)
    
  })


});

module.exports = router;
