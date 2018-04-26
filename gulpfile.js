let gulp = require('gulp');
let imagemin = require('gulp-imagemin');
let clean = require('gulp-clean');
let uglify = require('gulp-uglify');
let usemin = require('gulp-usemin');
let cssmin = require('gulp-cssmin');
let autoprefixer = require('gulp-autoprefixer');
let htmlmin = require('gulp-htmlmin');
let inlinesource = require('gulp-inline-source');
let browserSync = require('browser-sync');
let sass = require('gulp-sass');

gulp.task('default', ['copy'], function () {
    gulp.start('build-img', 'usemin');
});

gulp.task('copy', ['clean'], function () {
    // Bootstrap
    gulp.src([
        './bower_components/bootstrap/dist/**/*',
        '!./bower_components/bootstrap/dist/css/bootstrap-grid*',
        '!./bower_components/bootstrap/dist/css/bootstrap-reboot*'
    ]).pipe(gulp.dest('./src/vendor/bootstrap'));

    // Font Awesome
    gulp.src([
        './bower_components/font-awesome/**/*',
        '!./bower_components/font-awesome/{less,less/*}',
        '!./bower_components/font-awesome/{scss,scss/*}',
        '!./bower_components/font-awesome/.*',
        '!./bower_components/font-awesome/*.{txt,json,md}'
    ]).pipe(gulp.dest('./src/vendor/font-awesome'));

    // jQuery
    gulp.src([
        './bower_components/jquery/dist/jquery.min.js'
    ]).pipe(gulp.dest('./src/vendor/jquery'));

    // SmoothScroll.js
    gulp.src([
        './bower_components/smoothscroll-for-websites/SmoothScroll.js'
    ]).pipe(gulp.dest('./src/vendor/smoothscroll'));

    // Parallax JS
    gulp.src([
        './bower_components/parallax.js/parallax.min.js'
    ]).pipe(gulp.dest('./src/vendor/parallax'));

    return gulp.src('src/**/*').pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', function () {
    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', ['html-min'], function () {
    gulp.src('dist/**/*.html')
        .pipe(usemin({
            'js': [uglify],
            'css': [autoprefixer, cssmin]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('html-min', ['inlinesource'], function () {
    return gulp.src('dist/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('inlinesource', function () {
    return gulp.src('dist/**/*.html')
        .pipe(inlinesource())
        .pipe(gulp.dest('dist'));
});

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch('src/sass/*.sass').on('change', function (event) {
        console.log('Compilando arquivo: ' + event.path);
        gulp.src(event.path)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('src/css'));
    });
    gulp.watch('src/**/*').on('change', browserSync.reload);
});