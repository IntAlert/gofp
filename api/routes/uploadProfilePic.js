const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ 
  dest: 'uploads/',
  limits: { fileSize: 2048 }
})

/* GET home page. */
router.post('/', upload.single('image'), function(req, res, next) {

  res.json({
    ok: true,
    image: '/images/some-image.png',
    opengraph: 'http://www.google.co.uk/',
  });

});

module.exports = router;
