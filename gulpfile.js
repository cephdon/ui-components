'use strict';

var appName = 'mms-ui-components',
	buildRoot = 'public',
	stylesPath = 'src/**/*.scss',
	scriptsPath = 'src/**/*.js',
	appTemplates = 'src/*/**/*.html',
	appEntry = './src/mms-ui-components.js',
	appLibs = require('./src/libs.json'),
	screenTemplate = './src/screenTemplate.html',
	imagePatterns = [
  	    'src/**/*.png',
	    'src/**/*.jpg',
	    'src/**/*.svg'
	],

	availableScreens = [
		'dashboard',
        'overview'
	],

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

gulp.task('browserify-app', ['lint-scripts'], function () {

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

gulp.task('copy-libs', function() {

    var styleMapFileNames,
        scriptMapFileNames,
        scriptMapMapFileNames;

    console.log('Copying libs...');

    styleMapFileNames = appLibs.styles.map(function(fileName) {
        return path.join(
            path.dirname(fileName),
            path.basename(fileName, '.css') + '.map'
        );
    });

    scriptMapFileNames = appLibs.scripts.map(function(fileName) {
        return path.join(
            path.dirname(fileName),
            path.basename(fileName, '.js') + '.map'
        );
    });

    scriptMapMapFileNames = appLibs.scripts.map(function(fileName) {
        return path.join(
            path.dirname(fileName),
            path.basename(fileName) + '.map'
        );
    });

    gulp.src(appLibs.styles)
        .pipe(rename(function(path) {
            path.dirname = 'libs';
        }))
        .pipe(gulp.dest(buildRoot));

    gulp.src(appLibs.scripts)
        .pipe(rename(function(path) {
            path.dirname = 'libs';
        }))
        .pipe(gulp.dest(buildRoot));

    gulp.src(styleMapFileNames)
        .pipe(rename(function(path) {
            path.dirname = 'libs';
        }))
        .pipe(gulp.dest(buildRoot));

    gulp.src(scriptMapFileNames)
        .pipe(rename(function(path) {
            path.dirname = 'libs';
        }))
        .pipe(gulp.dest(buildRoot));

    gulp.src(scriptMapMapFileNames)
        .pipe(rename(function(path) {
            path.dirname = 'libs';
        }))
        .pipe(gulp.dest(buildRoot));

    gulp.src(appLibs.fonts)
        .pipe(rename(function(path) {
            path.dirname = 'fonts';
        }))
        .pipe(gulp.dest(buildRoot));

});


gulp.task('compile-images', function() {

    console.log('Compiling images...');

    gulp.src(imagePatterns)
        .pipe(rename(function(path) {
            path.dirname = '';
        }))
        .pipe(gulp.dest(buildRoot + '/images/'));
});

gulp.task('compile-templates', function() {

    var scriptFileNames,
        styleFileNames;

    console.log('Compiling app-templates...');

    gulp.src(appTemplates)
        .pipe(rename(function(path) {
            path.dirname = 'templates';
        }))
        .pipe(templateCache(appName + '-templates.js', {
            module: 'mms.ui-components.templates',
            standalone: true,
            root: '/' + appName + '/'
        }))
        .pipe(gulp.dest(buildRoot + '/scripts/'));

    scriptFileNames = appLibs.scripts.map(function(fileName) {
        return 'libs/' + path.basename(fileName);
    });


    styleFileNames = appLibs.styles.map(function(fileName) {
        return 'libs/' + path.basename(fileName);
    });


	availableScreens.forEach(function(screenTag) {
	    gulp.src(screenTemplate)
	        .pipe(template({
	            scripts: scriptFileNames,
	            styles: styleFileNames,
	            screenTag: screenTag
	        }))
            .pipe(rename(function(path) {
	            path.basename = screenTag;
    	    }))
	        .pipe(gulp.dest(buildRoot));
	});
});

gulp.task('compile-all', function(cb) {
    runSequence('clean-build', 
    	'compile-styles', 'lint-scripts', 'browserify-app', 'compile-images', 'compile-templates', 'copy-libs', cb);
});

gulp.task('register-watchers', ['compile-all'], function(cb) {

    gulp.watch([scriptsPath, appEntry], ['compile-scripts']);
    gulp.watch([appTemplates, screenTemplate], ['compile-templates']);
    gulp.watch([stylesPath], ['compile-styles']);
    gulp.watch([imagePatterns], ['compile-images']);

    return cb;
});

