const gulp = require('gulp');
const browserSync = require('browser-sync').create();
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var autoprefixer = require("gulp-autoprefixer");
var csso = require("gulp-csso");
var rename = require("gulp-rename")

gulp.task('html', () => {

    return gulp.src('source/*.html')
      .pipe(gulp.dest('./build'));
  
  });  

gulp.task('watch', () => {
    browserSync.init({
      server: {
        baseDir: "./build"
      }
    });
  
    gulp.watch('./source/*.html', gulp.series('html'))
    gulp.watch("./source/*.html").on('change', browserSync.reload);
  });

  gulp.task("css", function () {
    return gulp.src("source/scss/style.scss")
      .pipe(plumber())
      .pipe(sourcemap.init())
      .pipe(sass())
      .pipe(postcss([
        autoprefixer()
      ]))
      .pipe(csso())
      .pipe(rename("style.min.css"))
      .pipe(sourcemap.write("."))
      .pipe(gulp.dest("build/css"));
  });
 


  