const gulp = require ('gulp');
const browserSync = require ('browser-sync').create();
 
gulp.task('html', function() {
    return gulp.src('source/*.html').pipe (gulp.dest('./build'));
})