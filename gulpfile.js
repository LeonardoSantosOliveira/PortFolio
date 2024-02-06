const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/styles/'));
}

exports.build = gulp.parallel(compilaSass);

exports.watch = function(){
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(compilaSass))
}