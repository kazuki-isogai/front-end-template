import gulp from 'gulp'
import _ from 'lodash'
import * as tasks from './gulp/tasks/*'

_.each(tasks, (fn, key) => {
  gulp.task(key, fn)
})
