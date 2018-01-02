var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

// Task to start the server and refresh the browser
gulp.task('browserSync', function(){
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app'           
        },
    })
});

// Task to compile sass to css and copy it to the dist folder
gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
    .pipe(gulp.dest('dist/css'))
});

// Task to minify images
gulp.task('images', function(){
    return gulp.src('app/assets/**/*.+(png|jpg|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/assets'))
});

// task to move fonts to dist folder ready for production
gulp.task('fonts', function(){
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});

// Task to copy html files to dist folder ready for production
gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));
});

// Task to move js file to dist folder ready for production
gulp.task('js', function(){
    return gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))
});

// Taks to delete the dist folder
gulp.task('clean:dist', function(){
    return del.sync('dist');
});
/* *********************************************** */
// Task to prepare files for production - need to run individually
gulp.task('build', function(callback){
    runSequence('clean:dist',
    ['html', 'sass', 'images', 'js', 'fonts'],
    callback
    )
});
/* *********************************************** */

// Task to watch files for changes and refresh browser automatically
gulp.task('watch', ['browserSync', 'sass' ], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

// One overall task that will compile sass into css, watch files for changes
// and refresh browser
gulp.task('default', function(callback){
    runSequence(['sass', 'browserSync', 'watch'],
    callback
    )
});