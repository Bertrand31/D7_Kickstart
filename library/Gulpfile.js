/****************
 * DÉPENDANCES *
****************/

// GÉNÉRAL
var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    newer       = require('gulp-newer'),
    sourcemaps  = require('gulp-sourcemaps'),
    livereload  = require('gulp-livereload');

// CSS
var sass        = require('gulp-sass');

// JS
var jshint      = require('gulp-jshint'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify');

// IMAGES
var imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    imageminSvgo = require('imagemin-svgo');

/***************
 * PLAYGROUND *
***************/

var chemins = {
    jsFront: 'src/javascripts/**/*.js',
    jsDest: 'built/js/',
    cssSrc: 'src/**/*.scss',
    cssDest: 'built/',
    imagesSrc: 'src/images/**/*',
    imagesDest: 'built/img/'
};

/***********
 * TÂCHES *
***********/

gulp.task('jsFront', function () {
    return gulp.src(chemins.jsFront)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglify({ outSourceMap: true }))
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest(chemins.jsDest));
});

gulp.task('sass', function () {
    return gulp.src(chemins.cssSrc)
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass({ errorLogToConsole: true }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(chemins.cssDest))
        .pipe(livereload());
});

gulp.task('imagemin', function () {
    return gulp.src(chemins.imagesSrc)
        .pipe(plumber())
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
    gulp.watch(chemins.jsFront, ['jsFront']);
    gulp.watch(chemins.cssSrc, ['sass']);
    gulp.watch(chemins.imagesSrc, ['imagemin']);
});
