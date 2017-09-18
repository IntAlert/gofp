const express = require('express');
const router = express.Router();
const ExifImage = require('exif').ExifImage;
const path = require('path');
const gm = require('gm');

const names = [
	'../public/iphone.JPG',
	'../public/Slice.png'
];

// PLAN
// maybe get the type from upload request?
// - resize and orient on server
// - resize and orient on client side


// size
// .size(function (err, size) {
//   if (!err) {
//     console.log('width = ' + size.width);
//     console.log('height = ' + size.height);
//   }
// });


router.get('/', function(req, res){
	gm(path.join(__dirname, names[1])).size(function(err, value){
		res.json(value)
	})
	
})

/* GET home page. */
// router.get('/old', function(req, res, next) {
// 	try {

		
// 			new ExifImage({ image : path.join(__dirname, names[0]) }, function (error, exifData) {
// 					if (error)
// 							console.log('Error: '+ error.message);
// 					else
// 							// res.json(exifData); // Do something with your data!
// 							res.send(JSON.stringify(exifData, null, 4))
// 			});
// 	} catch (error) {
// 			console.log('Error: ' + error.message);
// 	}
// });

module.exports = router;
