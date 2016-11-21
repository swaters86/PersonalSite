'use strict'

var gulp = require('gulp')

var sass = require('gulp-sass')

var fs = require('fs')

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets/'))
})

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass'])
})

gulp.task('default', ['sass', 'sass:watch'])
