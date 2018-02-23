var gulp = require('gulp');
gulp.task('copy',function () {
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
});
gulp.task('dist',function () {
    // gulp.watch('src/index.html',['copy']);
    gulp.watch('src/style/*.less',['style']);
});
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
gulp.task('style',function () {
    gulp.src('src/style/*.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'));
});
var browserSync = require('browser-sync').create();
gulp.task('serve',function () {
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
});