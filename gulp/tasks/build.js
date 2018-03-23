const gulp = require('gulp')
const config = require('../config')

const build = gulp.series(
  'clean',
  config.program.watch
    ? gulp.series(gulp.parallel('copy', 'html', 'images', 'styles'), 'default')
    : gulp.parallel('copy', 'html', 'images', 'styles', 'scripts')
)

gulp.task('build', build)
