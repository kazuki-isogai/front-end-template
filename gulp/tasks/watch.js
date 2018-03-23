const gulp = require('gulp')

const watch = () => {
  gulp.watch('copy')

  gulp.watch('html')

  gulp.watch('images')

  // gulp.start('scripts')

  gulp.watch('styles')
}

gulp.task('watch', watch)
