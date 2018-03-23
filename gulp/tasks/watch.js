const gulp = require('gulp')
const config = require('../config')

const watch = () => {
  gulp.watch(config.copy.src.globs, 'copy')

  gulp.watch(config.html.src.globs, 'html')

  gulp.watch(config.images.src.globs, 'images')

  gulp.task('scripts')()

  gulp.watch(config.styles.src.globs, 'styles')
}

gulp.task('watch', watch)
