var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('watch', function() {
    gulp.watch('js/**/*.js', []);
});

gulp.task('webserver', function() {
    connect.server({
        port: 8000
    });
});

gulp.task('default', ['webserver', 'watch']);
