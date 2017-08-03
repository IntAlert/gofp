var express = require('express');
var router = express.Router();
const models  = require('../models');

/* GET home page. */
router.post('/', function(req, res, next) {

  // create record
  models.PrizeEntry.create({
    badge_id: req.body.badge_id,
    email: req.body.email,
    festival_news: req.body.festival_news
  })

  // respond with results
  .then(prizeentry => {

    res.json({
      ok: true,
      prizeentry: prizeentry.get()
    });

  }).catch(err => {
    res.json({
      ok: false,
      err
    });
  })
  
});

module.exports = router;