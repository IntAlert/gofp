var express = require('express');
var router = express.Router();
const models  = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {

  // create record
  models.Badge.findAll({
		where: {
			promoted: true,
		},
		include: [
			{
				model: models.Action,
				attributes: ['id', 'title', 'image']
			},
			{
				model: models.PrizeEntry,
				attributes: ['name']
			},
			{
				model: models.Upload,
				attributes: ['url']
			}
		],
		attributes: [
			'id',
			'promoted',
			'story',
			'image',
			'createdAt',
		],
		order: [['promoted_priority', 'ASC']],
		limit: 4
	})
	.then(badges => {
		res.json({badges})
	});
  
});

module.exports = router;