const express = require('express');
const router = express.Router();
const models  = require('../models');
const multer = require('multer');
const upload = multer({ 
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  onError : function(err, next) {
    console.log('error', err);
    next(err);
  }
})

/* GET home page. */
router.post('/', upload.single('image'), function(req, res, next) {
console.log('here')
  res.json({
    ok: true,
    image: '/images/some-image.png',
    opengraph: 'http://www.google.co.uk/',
  });

  // get record
  models.Upload.create({
    user_id,
    key
  })

  // create badge
  .then(upload => {

    



  })

  // return badge details
  .then(badge => {




    
  })



});

module.exports = router;
