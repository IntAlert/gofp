const express = require('express');
const router = express.Router();
const models  = require('../models');
const reflix = require('../lib/reflix');

/* GET home page. */
router.post('/', function(req, res, next) {

	// get upload record
  models.Upload.findById(req.body.upload_id)

  // create badge
  .then(upload => {

    // upload may not exist, that's OK

    // const redirect = 'http://gofp.azurewebsites.net/badges/' + upload.badge_id;
    

    // create badge record
    return models.Badge.create({
      upload_id: req.body.upload_id,
      story: req.body.story
    })
    .then(badge => {
      return {badge, upload};
    });

  })

  .then(records => {

    const redirect = 'http://127.0.0.1:4200/badges/' + records.badge.id;
    const title = "Title";
    const description = "description";

    return reflix.generate(records.upload.url, req.body.story, redirect, title, description)
      .then((reflixResponse) =>{
        console.log(reflixResponse);
        return {
          reflix: reflixResponse,
          badge: records.badge
        }
      })
  })

  // update and return badge details
  .then(({reflix, badge}) => {

    return badge.update({
      image: reflix.urls.image,
      opengraph: reflix.urls.opengraph
    });

  })
  .then(badge => {
    res.json(badge.get())
  })


});

module.exports = router;
