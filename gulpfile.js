var gulp = require('gulp');////done
var sass = require('gulp-sass');///done
var htmlmin = require('gulp-htmlmin');///done
// var babel = require('gulp-babel');///done
var browserify = require('gulp-browserify');//done
watch = require('gulp-watch');///done

gulp.task('default', ['html', 'css', 'js']);

gulp.task('watch', function () {
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./sass/styles.scss', ['css']);
    gulp.watch('./index.html', ['html']);
})
////Removing the white space from HTML file
gulp.task('html', function() {
  return gulp.src('./index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./public'));
});

gulp.task('css', function () {
    gulp.src('./sass/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public'));
});

gulp.task('js', function () {
    gulp.src('./js/*.js')
        // .pipe(babel({ /
        //      presets: ['es2015']
        //      }))
        .pipe(browserify())
        .pipe(gulp.dest('./public'));
});
