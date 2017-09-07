var express = require('express');
var router = express.Router();
const models  = require('../models');

/* GET home page. */
router.post('/', function(req, res, next) {

  // create record
  models.PrizeEntry.create({
    action_id: req.body.action_id,
    badge_id: req.body.badge_id,
    name: req.body.name,
    email: req.body.email,
    festival_news: req.body.festival_news
  })

  // respond with results
  .then(prizeentry => {

    setTimeout(() => {
      res.json({
        ok: true,
        prizeentry: prizeentry.get()
      });
    }, 3);
    

  }).catch(err => {
    res.json({
      ok: false,
      err
    });
  })
  
});

module.exports = router;