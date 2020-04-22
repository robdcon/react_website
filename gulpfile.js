'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({
        script: 'src/index.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('browser-sync', gulp.series('nodemon', () => {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        // browser: "google chrome",
        port: 7000,
    });
}));

gulp.task('default', gulp.series('browser-sync', (done) => {

    done();
}));
