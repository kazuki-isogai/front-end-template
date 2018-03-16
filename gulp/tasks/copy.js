import gulp from 'gulp'
import config from '../config'
import { plugins as $ } from '../global'

export default function copy () {
  return gulp.src(config.copy.src.globs, config.copy.src.options)
    .pipe($.changed(config.paths.dest))
    .pipe(gulp.dest(config.paths.dest))
    .pipe($.if(config.program.watch, config.myServer.stream()))
}
