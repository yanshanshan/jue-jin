/**
 * Created by db on 16/8/16.
 */

var gulp_file_include = require('gulp-file-include'),
    gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    htmlmin = require('gulp-htmlmin');


gulp.task('webserver', function () {
    gulp.src('./dist')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});


gulp.task('file-include', function () {
    gulp.src(['src/index.html', 'src/about.html'])
        .pipe(gulp_file_include({
            prefix: '@@',
            basepath: '@file'
        }))
        //.pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});


gulp.task('watch', function () {
    gulp.watch(['src/*.html'], ['file-include'])
})


//gulp.task('minify', function() {
//    return gulp.src('dist/*.html')
//        .pipe(htmlmin({collapseWhitespace: true}))
//        .pipe(gulp.dest('dist'));
//});