import gulp from 'gulp'
import config from '../config'
import { plugins as $ } from '../global'
const webpackConfig = require('../../webpack.config')

export default function scripts () {
  return gulp.src(config.scripts.src.globs, config.scripts.src.options)
    .pipe($.vinylNamed(file => {
      return $.normalizePath(file.relative.replace(/\.[^.]+$/, ''))
    }))
    .pipe($.webpackStream(webpackConfig, $.webpack))
    .pipe(gulp.dest(config.paths.dest))
    .pipe($.if(config.env.PRODUCTION, $.gzip()))
    .pipe($.if(config.env.PRODUCTION, gulp.dest(config.paths.dest)))
    .pipe($.if(config.program.watch, config.myServer.stream()))
}
