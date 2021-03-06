const dotenv = require('dotenv').config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// routes
const getAction = require('./routes/getAction');
const getActions = require('./routes/getActions');
const uploadProfilePic = require('./routes/uploadProfilePic');
// const uploadProfilePicNew = require('./routes/uploadProfilePicNew');
// const uploadProfilePicSimple = require('./routes/uploadProfilePicSimple');
const generateBadge = require('./routes/generateBadge');
const enterPrizeDraw = require('./routes/enterPrizeDraw');

const getBadgeCount = require('./routes/getBadgeCount');
const getPromotedBadges = require('./routes/getPromotedBadges');
const getRecentBadges = require('./routes/getRecentBadges');
const getBadge = require('./routes/getBadge');
// const exif = require('./routes/exif');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// Accept requests from anywhere
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public', 'build')));

app.use('/api/getAction', getAction);
app.use('/api/getActions', getActions);
app.use('/api/uploadProfilePic', uploadProfilePic);
// app.use('/api/uploadProfilePicNew', uploadProfilePicNew);
// app.use('/api/uploadProfilePicSimple', uploadProfilePicSimple);
app.use('/api/generateBadge', generateBadge);
app.use('/api/enterPrizeDraw', enterPrizeDraw);
app.use('/api/getBadgeCount', getBadgeCount);
app.use('/api/getPromotedBadges', getPromotedBadges);
app.use('/api/getRecentBadges', getRecentBadges);
app.use('/api/getBadge', getBadge);
// app.use('/api/exif', exif);

// all unfound routes to be sent 
if (app.get('env') !== 'development') {
  app.use(function(req, res, next) {
    res.sendFile(path.join(__dirname, 'public', 'build', 'index.html'));
  });
} else {
  // unless we're in dev, then just show the 404
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
}

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      ok: false,
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    ok: false,
    message: err.message,
    error: {}
  });
});


module.exports = app;
