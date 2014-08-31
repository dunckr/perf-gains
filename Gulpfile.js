'use strict';

var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css');

gulp.task('uglify', function() {
    gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/'));
});

gulp.task('imagemin', function() {
    gulp.src('public/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/imgs/'));
});

gulp.task('minifyCSS', function() {
    gulp.src('./public/**/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./public/'));
});

gulp.task('htmlmin', function() {
    var opts = {
        comments: false
    };
    gulp.src('./public/**/*.html')
        .pipe(htmlmin(opts))
        .pipe(gulp.dest('./public/'));
});

gulp.task('build', ['uglify', 'minifyCSS', 'htmlmin', 'imagemin']);
