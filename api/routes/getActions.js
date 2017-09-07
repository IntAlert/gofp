var express = require('express');
var router = express.Router();
const models  = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {

  // get all actions, in order
  models.Action.findAll({
    order: [['priority', 'ASC']]
  })
    .then(actions => {
      res.json({actions})
    })
  
});

module.exports = router;