var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', function () {
  return gulp
    .src('./app/**/*.scss')
    .pipe(watch('./app/**/*.scss'))
    .pipe(sass())
    .pipe(
      gulp.dest(function (f) {
        return f.base;
      })
    );
});
