var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src(['./*.html'])
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(connect.reload());
});

gulp.task('script', function () {
  gulp.src('./js/*.js')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch(['./css/*.css'], ['css']);
  gulp.watch(['./js/*.js'], ['script']);
});
 
gulp.task('default', ['connect','watch']);