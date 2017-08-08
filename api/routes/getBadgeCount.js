var express = require('express');
var router = express.Router();
const models  = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {

  // create record
  models.Badge.count()
    .then(count => {
      res.json({count})
    })
  
});

module.exports = router;