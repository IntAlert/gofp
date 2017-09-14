const express = require('express');
const router = express.Router();
const models  = require('../models');
const reflix = require('../lib/reflix');
const url = require('url');

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
      action_id: req.body.action_id,
      upload_id: req.body.upload_id,
      story: req.body.story
    })
    .then(badge => {
      return {badge, upload};
    });

  })

  .then(records => {

    // construct Shareable URL
		var redirect = url.format({
			protocol: req.protocol,
			port: process.env.NODE_ENV == 'production' ? null:3000,
			hostname: req.hostname,
			pathname: 'badge/' + records.badge.id
		})

    const title = "#Everydaypeace";
    const description = "Little Action! Big change! #Everydaypeace\nWe all have a part to play in building peace. Why not join in with your small everyday action now!";

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
