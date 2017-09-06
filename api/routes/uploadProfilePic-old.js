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

  // get record
  models.Upload.create({
    path: payload.blobName,
    url: payload.url
  })

  // create badge
  .then(upload => {
    
    upload_id = upload.id
    return reflix.generate(upload.url)

  })

  // return badge details
  .then(badge => {

    return models.Badge.create({
      upload_id,
      image: badge.image,
      opengraph: badge.opengraph
    })
    

  })
  .then(badgeRecord => {
    res.json(badgeRecord.get())
  })


});

module.exports = router;
