/**
 * Module dependencies
 */

var concat     = require('gulp-concat');
var gulp       = require('gulp');
var jshint     = require('gulp-jshint');
var plumber    = require('gulp-plumber');
var rename     = require('gulp-rename');
var stylish    = require('jshint-stylish');
var sourcemaps = require('gulp-sourcemaps');
var uglify     = require('gulp-uglify');
var watch      = require('gulp-watch');

/**
 * Define the tasks
 */

gulp.task('copy', copy);
gulp.task('angular', angular)
gulp.task('jshint:browser', lintBrowser);
gulp.task('jshint:server', lintServer);
gulp.task('watch', watch)
gulp.task('default', ['jshint:server']);

/**
 * Watch files for changes and reapply tasks
 *
 * @api public
 */

function watch() {
  gulp.watch(['./browser/app/**/*.js'], ['angular']);
  gulp.watch(['./browser/assets/js/**/*.js'], ['scripts']);
  gulp.watch(['./browser/**/*.html'], ['copy']);
}

/**
 * Concat and minify the angular application
 *
 * @api public
 */

function angular() {
  var files = ['./browser/app/**/*.js'];

  gulp
    .src(files)
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/assets/js'));
}

/**
 * Copy html files to public folder
 *
 * @api public
 */

function copy() {
  var files = ['./browser/**/*.html', './browser/**/*.{png,jpg,svg}'];

  gulp
    .src(files)
    .pipe(gulp.dest('./public'));
}

/**
 * Lint the server using jshint and jshint-stylish
 *
 * @api public
 */

function lintServer() {
  var files = ['./server/**/*.js'];

  gulp
    .src(files)
    .pipe(plumber())
    .pipe(watch(files))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
}

/**
 * Lint the browser using jshint and jshint-stylish
 *
 * @api public
 */

function lintBrowser() {
  var files = ['./browser/**/*.js'];

  gulp
    .src(files)
    .pipe(plumber())
    .pipe(watch(files))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
}

/**
 * Concat and minify the scripts
 */

function scripts() {
  var files = ['./browser/assets/js/**/*.js'];

  gulp
    .src(files)
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/assets/js'));
}
