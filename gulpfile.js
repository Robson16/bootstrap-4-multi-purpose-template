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
let jshint = require('gulp-jshint');
let jshintStylish = require('jshint-stylish');
let csslint = require('gulp-csslint');
let sass = require('gulp-sass');

gulp.task('default', ['copy'], function () {
    gulp.start('build-img', 'usemin');
});

gulp.task('copy', ['clean'], function () {
    gulp.src(['bower_components/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('src/vendor/bootstrap'));

    gulp.src(['bower_components/components-font-awesome/**/*', '!bower_components/components-font-awesome/*.json', '!bower_components/components-font-awesome/.*'])
        .pipe(gulp.dest('src/vendor/font-awesome'));

    gulp.src(['bower_components/jquery/dist/jquery.min.js', 'bower_components/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('src/vendor/jquery'));

    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
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
    gulp.watch('src/**/*.js').on('change', function (event) {
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish));
    });
    gulp.watch('src/**/*.css').on('change', function (event) {
        gulp.src(event.path)
            .pipe(csslint())
            .pipe(csslint.reporter());
    });
    gulp.watch('src/scss/*.scss').on('change', function (event) {
        console.log('Compilando arquivo: ' + event.path);
        gulp.src(event.path)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('src/css'));
    });
    gulp.watch('src/**/*').on('change', browserSync.reload);
});