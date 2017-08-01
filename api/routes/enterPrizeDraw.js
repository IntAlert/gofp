var express = require('express');
var router = express.Router();


/* GET home page. */
router.post('/', function(req, res, next) {

  res.json({
    ok: true,
    email: req.body.email,
    festival_news: req.body.festival_news,
  });
  
});

module.exports = router;
