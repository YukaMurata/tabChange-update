'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pleeease = require('gulp-pleeease');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded',
        }))
        .pipe(pleeease())
        .pipe(gulp.dest(__dirname + './css'));
});

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});