var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


gulp.task('sass', function () {
    return gulp.src('scss/*')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
    return browserSync.init(["css/*.css", "js/*.js",'*.html'], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', gulp.series('sass', 'browser-sync', function () {
    gulp.watch("scss/*.scss", ['sass']);
}));
