import gulp from 'gulp'
import config from '../config'
import * as tasks from './*'

const build = gulp.series(
  tasks.clean,
  config.program.watch
    ? gulp.series(gulp.parallel(tasks.copy, tasks.html, tasks.images, tasks.styles), tasks.defaults)
    : gulp.parallel(tasks.copy, tasks.html, tasks.images, tasks.styles, tasks.scripts)
)

export default build
