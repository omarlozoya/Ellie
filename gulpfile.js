var gulp = require("gulp");
var browserSync = require("browser-sync").create();

// gulp.task('hello', function() {
//   console.log('Hello Omar');
// });

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./src"
    },
    open: false
  });
});
