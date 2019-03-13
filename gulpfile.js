var gulp = require('gulp');
var browsersync = require('browser-sync').create();
// var sass = require('gulp-sass');

// gulp.task('hello', function() {
//   console.log('Hello Omar');
// });
// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: 'src'
    },
    //open: false
  });
  done();
}

// // BrowserSync Reload
// function browserSyncReload(done) {
//   browserSync.reload();
//   done();
// }

// // CSS task
// function css() {
//   return gulp
//     .src('src/scss/**/*.scss')
//     .pipe(plumber())
//     .pipe(sass({ outputStyle: "expanded" }))
//     .pipe(gulp.dest('src/css'))
//     .pipe(rename({ suffix: ".min" }))
//     .pipe(postcss([autoprefixer(), cssnano()]))
//     .pipe(gulp.dest('src/css'))
//     .pipe(browsersync.stream());
// }

// // Watch files
// function watchFiles() {
//   gulp.watch("src/scss/**/*", css);
// }

// Static server
// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: 'src'
//     },
//     open: false
//   });
//   done();
// });

// gulp.task('sass', function() {
//   return gulp
//     .src('src/scss/**/*.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('src/css'))
//     .pipe(browserSync.reload({ stream: true }));
// });

const watch = gulp.parallel(browserSync);

exports.watch = watch;

// // gulp.task('watch', ['browserSync', 'sass'], function() {
// //   gulp.watch('src/scss/**/*.scss', ['sass']);
// // });

// // gulp.task('watch', ['browserSync', 'sass'], function() {
// //   gulp.watch('src/scss/**/*.scss', ['sass']);
// // });
