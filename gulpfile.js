var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src('demo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(''))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task("server", function() {
  connect.server({
    port: 3000,
    livereload: true
  })
})

gulp.task("watch", function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('demo.scss', ['sass']);
  gulp.watch('index.html', ['html']);
})

gulp.task('default', ["server", "sass", "watch"]);
