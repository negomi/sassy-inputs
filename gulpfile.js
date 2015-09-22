var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var git = require('gulp-git');
var deploy = require('gulp-gh-pages');

gulp.task('sass', function() {
  gulp.src('demo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(''))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('server', function() {
  connect.server({
    port: 3000,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('demo.scss', ['sass']);
  gulp.watch('index.html', ['html']);
});

gulp.task('tag', function(done) {
  var pkg = JSON.parse(require('fs').readFileSync('./package.json'));
  var v = 'v' + pkg.version;
  var message = 'Release ' + v;

  git.tag(v, message, function(err) {
    if (err) throw err;

    git.push('origin', v, function(err) {
      if (err) throw err;
      done();
    });
  });
});

gulp.task('npm', function(done) {
  require('child_process')
    .spawn('npm', ['publish'], { stdio: 'inherit' })
    .on('close', done);
});

gulp.task('deploy', ['sass'], function() {
  return gulp.src(['index.html', 'demo.css'])
    .pipe(deploy());
});

gulp.task('default', ['server', 'sass', 'watch']);
gulp.task('release', ['tag', 'npm', 'deploy']);
