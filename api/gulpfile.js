var gulp = require('gulp');
var path = require('path');
var execSync = require('child_process').execSync;

gulp.task('default', function (cb) {

  // install production dependencies
  execSync('npm install --production', {
    cwd: path.join(__dirname, '..', 'my-app')
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });

  // install dev dependencies
  execSync('npm install --only=dev', {
    cwd: path.join(__dirname, '..', 'my-app')
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });


  // run NG build process
  execSync('ng build -prod --aot=false', {
    cwd: path.join(__dirname, '..', 'my-app')
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
})