var gulp = require('gulp');
var path = require('path');
var execSync = require('child_process').execSync;

gulp.task('default', function (cb) {

  
  // FRONTEND

  // install production dependencies for frontend
  execSync('npm install --production', {
    cwd: path.join(__dirname, '..', 'my-app')
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });


  // install dev dependencies for Frontend
  execSync('npm install --only=dev', {
    cwd: path.join(__dirname, '..', 'my-app')
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });

  // run NG build process
  execSync(path.join(__dirname, '..', 'my-app', 'node_modules', '.bin', 'ng') + ' build -prod --aot=false', {
    cwd: path.join(__dirname, '..', 'my-app')
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });


  // BACKEND

  // install dev dependencies for Backend
  execSync('npm install --only=dev', {
    cwd: path.join(__dirname)
  }, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });

  // run Database migration
  // execSync(path.join(__dirname, 'node_modules', '.bin', 'sequelize') + ' db:migrate', {
  //   cwd: path.join(__dirname)
  // }, function (err, stdout, stderr) {
  //   console.log(stdout);
  //   console.log(stderr);
  // });


})