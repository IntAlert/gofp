

const express = require('express');
const router = express.Router();
const models  = require('../models');
const multer = require('multer');
// const MulterAzureStorage = require('multer-azure-storage');
const reflix = require('../lib/reflix');
// const azureStorageConfig = require('../config/azureStorage');
const gm = require('gm').subClass({imageMagick: true});

const upload = multer({ 
  storage: new multer.memoryStorage(),
  // limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  onError : function(err, next) {
    console.log('error', err);
    next(err);
  }
})

// brew gm

let upload_id

/* GET home page. */
router.post('/', upload.single('image'), function(req, res, next) {

  // get uploaded template file
	const payload = req.file;
	
	console.log(typeof(req.file));
  
  // Detect if file was sent
  if (undefined === payload) {
    res.status(400).json({ok:false, err:'No file uploaded'})
	}
	
	gm(payload.buffer)
		.autoOrient()
		.resize(140, 140, '>')
		.write('./resize.png', function (err) {
			if (!err) res.json(true);
			console.log(err)
		});


});

module.exports = router;
