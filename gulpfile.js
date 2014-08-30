var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var inject = require('gulp-inject');
var del = require('del');

// Returns File object as string, to inject in html file
function fileContents (filePath, file) {
    return file.contents.toString('utf8');
}

// Add's display none propery to svg with definitions
function transformSvg (svg, cb) {
    svg.attr({ style: 'display:none' })
    cb(null)
}

// Remove the distribution file
gulp.task('clean', function () {
    del.sync('www')
});

// Copy files to www that do not require transform
gulp.task('copy', function () {
    return gulp.src('app/config.xml', {base: 'app/'})
        .pipe(gulp.dest('www'))
});

// Builds SVG store from all symbol resources
gulp.task('svg', function () {
    var svgs = gulp.src('app/resources/symbols/*.svg')
        .pipe(svgmin())
        .pipe(svgstore({inlineSvg: true, transformSvg: transformSvg}))

    return gulp.src('app/index.html')
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest('www/'));
});

gulp.task('default', ['clean', 'copy', 'svg'])