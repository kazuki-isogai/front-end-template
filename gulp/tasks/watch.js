import gulp from 'gulp'
import config from '../config'
import * as tasks from './*'

export default function watch () {
  gulp.watch(config.copy.src.globs, tasks.copy)

  gulp.watch(config.html.src.globs, tasks.html)

  gulp.watch(config.images.src.globs, tasks.images)

  tasks.scripts()

  gulp.watch(config.styles.src.globs, tasks.styles)
}
