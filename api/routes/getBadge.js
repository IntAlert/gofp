var express = require('express');
var router = express.Router();
const models  = require('../models');

/* GET home page. */
router.get('/:id', function(req, res, next) {

  // create record
	models.Badge.findOne({
		where: {
			id: req.params.id
		},
		include: [
			{
				model: models.Action,
				attributes: ['id', 'title']
			},
			{
				model: models.PrizeEntry,
				attributes: ['name']
			}
		],
		attributes: [
			'id',
			'story',
			'image',
			'createdAt',
		]
	})
    .then(badge => {
      res.json({badge})
    })
  
});

module.exports = router;