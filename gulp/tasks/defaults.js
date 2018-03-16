import gulp from 'gulp'
import serve from './serve'
import watch from './watch'

const defaults = gulp.parallel(serve, watch)

export default defaults
