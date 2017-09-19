const express = require('express');
const router = express.Router();
const models  = require('../models');
const reflix = require('../lib/reflix');
const url = require('url');

let action, upload;

/* GET home page. */
router.post('/', function(req, res, next) {

  // get upload record and action record
  Promise.all([
    models.Upload.findById(req.body.upload_id),
    models.Action.findById(req.body.action_id),
  ])
  
  // create badge
  .then(records => {

    // upload may not exist, that's OK
    upload = records[0];
    action = records[1];

    // const redirect = 'http://gofp.azurewebsites.net/badges/' + upload.badge_id;
    

    // create badge record
    return models.Badge.create({
      action_id: req.body.action_id,
      upload_id: req.body.upload_id,
      story: req.body.story
    })

  })

  .then(badge => {

    // construct Shareable URL
		var redirect = url.format({
			protocol: req.protocol,
			port: process.env.NODE_ENV == 'production' ? null:3000,
			hostname: req.hostname,
			pathname: 'badge/' + badge.id
		})

    const title = "#EverydayPeace";
    const description = "Little actions can bring big change. Here's how I'm adding to peace. Join me by creating your own & we can spread a little peace together";

    const uploadURL = upload ? upload.url : false;

    let storyClass;
    
    if (req.body.story.length < 20) {
      storyClass = 'xx-large';
    } else if (req.body.story.length < 80) {
      storyClass = 'x-large';
    } else if (req.body.story.length < 100) {
      storyClass = 'large';
    } else{
      storyClass = '';
    }

    return reflix.generate(action.title_for_badge, uploadURL, req.body.story, redirect, title, description, storyClass)
      .then((reflixResponse) =>{
        return {
          reflix: reflixResponse,
          badge
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
