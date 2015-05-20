/**
 * Module dependencies
 */

var concat     = require('gulp-concat');
var gulp       = require('gulp');
var jeet       = require('jeet');
var jshint     = require('gulp-jshint');
var kouto      = require('kouto-swiss');
var plumber    = require('gulp-plumber');
var rename     = require('gulp-rename');
var rupture    = require('rupture');
var sourcemaps = require('gulp-sourcemaps');
var stylish    = require('jshint-stylish');
var stylus     = require('gulp-stylus');
var uglify     = require('gulp-uglify');
var watch      = require('gulp-watch');

/**
 * Default task
 *
 * @api public
 */

gulp.task('default', ['watch']);

/**
 * Watch files for changes and reapply tasks
 *
 * @api public
 */

gulp.task('watch', ['angular', 'copy', 'scripts', 'stylus'], function() {
  gulp.watch(['./browser/app/**/*.js'], ['angular']);
  gulp.watch(['./browser/assets/js/**/*.js'], ['scripts']);
  gulp.watch(['./browser/**/*.html'], ['copy']);
  gulp.watch(['./browser/assets/styl/**/*.styl'], ['stylus'])
});

/**
 * Concat and minify the angular application
 *
 * @api public
 */

gulp.task('angular', function() {
  var files = ['./browser/app/**/*.js'];

  return gulp
    .src(files)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/js'));
});

/**
 * Copy html files to public folder
 *
 * @api public
 */

gulp.task('copy', function() {
  var files = ['./browser/**/*.html', './browser/**/*.{png,jpg,svg}'];

  return gulp
    .src(files)
    .pipe(gulp.dest('./public'));
});

/**
 * Lint the server using jshint and jshint-stylish
 *
 * @api public
 */

gulp.task('lint:server', function() {
  var files = ['./server/**/*.js'];

  return gulp
    .src(files)
    .pipe(plumber())
    .pipe(watch(files))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

/**
 * Lint the browser using jshint and jshint-stylish
 *
 * @api public
 */

gulp.task('lint:browser', function() {
  var files = ['./browser/**/*.js'];

  return gulp
    .src(files)
    .pipe(plumber())
    .pipe(watch(files))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

/**
 * Concat and minify the scripts
 *
 * @api public
 */

gulp.task('scripts', function() {
  var files = ['./browser/assets/js/**/*.js'];

  return gulp
    .src(files)
    .pipe(plumber())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/assets/js'));
});

/**
 * Convert stylus files to css
 *
 * @api public
 */

gulp.task('stylus', function() {
  var files = ['./browser/assets/styl/styles.styl'];

  return gulp
    .src(files)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: true,
      use: [jeet(), kouto(), rupture()]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/assets/css'));
});
