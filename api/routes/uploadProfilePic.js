const express = require('express');
const router = express.Router();
const models  = require('../models');
const multer = require('multer');
const MulterAzureStorage = require('multer-azure-storage');
const reflix = require('../lib/reflix');
const azureStorageConfig = require('../config/azureStorage');

const upload = multer({ 
  storage: new MulterAzureStorage(azureStorageConfig),
  // limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  onError : function(err, next) {
    console.log('error', err);
    next(err);
  }
})

let upload_id

/* GET home page. */
router.post('/', upload.single('image'), function(req, res, next) {

  // get uploaded template file
  const payload = req.file;
  
  // Detect if file was sent
  if (undefined === payload) {
    res.status(400).json({ok:false, err:'No file uploaded'})
  }

  // create record of upload
  models.Upload.create({
    path: payload.blobName,
    url: payload.url
  })

  // return record details 
  .then(upload => {
    
		upload_id = upload.id;
		res.json({
			upload: {
				id: upload.id,
				url: upload.url,
			}
		});

  })


});

module.exports = router;
