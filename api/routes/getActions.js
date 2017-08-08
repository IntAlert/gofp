var express = require('express');
var router = express.Router();
const models  = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {

  // create record
  models.Action.findAll()
    .then(actions => {
      res.json({actions})
    })
  
});

module.exports = router;