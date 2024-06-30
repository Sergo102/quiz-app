const {src, dest, watch, series} = require('gulp');

// scss
const scss = require('gulp-sass')(require('sass'));
const cssMinify = require('gulp-clean-css')

function styles(){
  return src('styles/**/*.scss')
    .pipe(scss())
    .pipe(cssMinify())
    .pipe(dest('dist/styles/'))
    .pipe(browserSync.stream());
}

// scripts
const jsMinify = require('gulp-terser')

function scripts(){
  return src('scripts/**/*.js')
    .pipe(jsMinify())
    .pipe(dest('dist/scripts/'))
    .pipe(browserSync.stream());
}

// server
const browserSync = require('browser-sync').create();

function serverWatch(){
  browserSync.init({
    server: {
        baseDir: "./"
      }
    });

  watch(['scripts/', 'styles/'], series(styles, scripts));
  watch("*.html").on("change", browserSync.reload);
}


exports.default = series(scripts, styles, serverWatch);