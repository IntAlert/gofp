var gulp = require('gulp');
var path = require('path');
var exec = require('child_process').exec;

gulp.task('default', function (cb) {
  exec('ng build -prod --aot=false', {
    cwd: path.join(__dirname, '..', 'my-app')
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})