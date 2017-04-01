'use strict';

var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    htmlhint = require('gulp-htmlhint'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    purify = require('gulp-purifycss'),
    inline = require('gulp-inline-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    del = require('del'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  src: {
    html: 'src/*.html',
    js: 'src/js/main.js',
    style: 'src/style/main.less',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  watch: {
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/style/**/*.less',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
};

var config = {
  server: {
      baseDir: "./build"
  },
  tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: "tsareva"
};

gulp.task('html-build', function () {
  gulp.src(path.src.html)
    .pipe(htmlhint())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
});


gulp.task('style-build', function () {
  gulp.src(path.src.style)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(purify([path.src.html]))
    // .pipe(uncss({html: path.src.html}))
    .pipe(prefixer())
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({stream: true}));
});


gulp.task('js-build', function () {
  gulp.src(path.src.js)
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(jshint())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
});

gulp.task('image-build', function () {
  gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
  }))
  .pipe(gulp.dest(path.build.img))
  .pipe(reload({stream: true}));
});

gulp.task('fonts-build', function() {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
});



gulp.task('build', ['html-build','style-build',  'js-build', 'fonts-build', 'image-build']);


gulp.task('watch', function(){
  gulp.watch(path.watch.html, ['html-build']);
  gulp.watch(path.watch.style, ['style-build']);
  gulp.watch(path.watch.js, ['js-build']);
  gulp.watch(path.watch.img, ['image-build']);
  gulp.watch(path.watch.fonts, ['fonts-build']);
});

gulp.task('webserver', function() {
  browserSync(config);
});

gulp.task('clean', function() {
  del(path.clean);
});

gulp.task('default', ['build', 'webserver', 'watch']);
