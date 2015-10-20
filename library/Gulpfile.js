/****************
 * DÉPENDANCES *
****************/

// GÉNÉRAL
var gulp   = require('gulp'),
    plumber = require('gulp-plumber'),
    newer = require('gulp-newer'),
    livereload = require('gulp-livereload');

// CSS
var compass = require('gulp-compass');

// JS
var jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// IMAGES
var imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    imageminSvgo = require('imagemin-svgo');

/***************
 * PLAYGROUND *
***************/

var chemins = {
    jsSrc: ['src/javascripts/libs/*.js', 'src/javascripts/scripts.js'],
    jsDest: 'built/js/',
    cssSrc: 'src/**/*.scss',
    cssDest: 'built/css/',
    imagesSrc: 'src/images/**/*',
    imagesDest: 'built/img/'
};

/***********
 * TÂCHES *
***********/

gulp.task('jscrush', function () {
    return gulp.src(chemins.jsSrc)
        .pipe(plumber())
        .pipe(newer('scripts.min.js'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(chemins.jsDest));
});

gulp.task('compass', function () {
    return gulp.src(chemins.cssSrc)
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(compass({
            config_file: 'config.rb',
            sass: 'src/scss',
            css: chemins.cssDest
        }))
        .pipe(gulp.dest(chemins.cssDest))
        .pipe(livereload());
});

gulp.task('imagemin', function () {
    return gulp.src(chemins.imagesSrc)
        .pipe(newer(chemins.imagesDest))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(chemins.imagesDest));
});

// Commits gather, and now my watch begins. I am the watcher on the files.
gulp.task('default', function() {
    livereload.listen();
    gulp.watch(chemins.jsSrc, ['jscrush']);
    gulp.watch(chemins.cssSrc, ['compass']);
    gulp.watch(chemins.imagesSrc, ['imagemin']);
});
