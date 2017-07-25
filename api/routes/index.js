var express = require('express');
var router = express.Router();
var multer = require('multer');


var upload = multer({ dest: 'uploads/' })

/* GET home page. */
router.post('/api', upload.single('image'), function(req, res, next) {

  console.log(req.file)
  res.json({
    image: '/images/some-image.png'
  });
});

module.exports = router;
