'use strict';

var buildRoot = './public',
	stylesPath = './src/**/*.scss',
	scriptsPath = './**/*.js',

    gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    browserify = require('browserify'),
    concat = require('gulp-concat'),
    buffer = require('gulp-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    source = require('vinyl-source-stream'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    runSequence = require('run-sequence'),
    templateCache = require('gulp-angular-templatecache'),
    template = require('gulp-template'),
	clean = require('gulp-clean'),

	fs = require('fs-extra'),
    path = require('path');



gulp.task('clean-build', function () {
    return gulp.src(buildRoot).pipe(clean());
});

gulp.task('compile-styles', function () {

    console.log('Compiling styles...');

    gulp.src(stylesPath)

        .pipe(sass({
            errLogToConsole: true,
            sourceComments: 'map'
        }))
        .pipe(rename(function (path) {
            path.dirname = '';
        }))
        .pipe(concat('mms-ui-components.css'))
        .pipe(gulp.dest(buildRoot + '/styles/'));
});

gulp.task('lint-scripts', function () {

    console.log('Linting scripts...');

    gulp.src(scriptsPath)
        .pipe(eslint())
        .pipe(eslint.format());

});