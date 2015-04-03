'use strict';

var buildRoot = 'public',
	stylesPath = 'src/**/*.scss',
	scriptsPath = 'src/**/*.js',
	appEntry = './src/mms-ui-components.js',

	debugShim = false,

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


function swallowError(error) {
    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}


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

gulp.task('browserify-app', function () {

    var bundler, bundle;
    console.log('Browserifying app...');

    if (debugShim) {
        process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1;
    }
    bundler = browserify({
        entries: [appEntry],
        debug: true
    });

    bundle = function () {
        return bundler
            .bundle()
            .on('error', swallowError)
            .pipe(source(appEntry))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(rename(function (path) {
                path.dirname = '';
            }))
            // Add transformation tasks to the pipeline here.
            //.pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(buildRoot + '/scripts/'));
    };

    return bundle();
});