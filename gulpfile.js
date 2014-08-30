var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var svgstore = require('gulp-svgstore');
var inject = require('gulp-inject');

gulp.task('build', function () {
    gulp.src(['app/config.xml', 'app/index.html'], {base: 'app/'})
        .pipe(gulp.dest('www'))
});

function fileContents (filePath, file) {
    return file.contents.toString('utf8');
}

function transformSvg (svg, cb) {
    svg.attr({ style: 'display:none' })
    cb(null)
}

gulp.task('svg', function () {
    var svgs = gulp.src(['app/resources/*.svg', '!app/resources/lines.svg'])
        .pipe(svgmin())
        .pipe(svgstore({inlineSvg: true, transformSvg: transformSvg}))

    return gulp.src('app/index.html')
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest('www/'));
});