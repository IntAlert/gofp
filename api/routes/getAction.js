var express = require('express');
var router = express.Router();
const models  = require('../models');

/* GET home page. */
router.get('/:id', function(req, res, next) {

  // create record
  models.Action.findById(req.params.id)
    .then(action => {
      res.json({action})
    })
  
});

module.exports = router;