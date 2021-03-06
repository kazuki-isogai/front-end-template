const gulp = require('gulp')
const config = require('../config')
const $ = require('../global').plugins
const myServer = require('../global').myServer

const styles = () => {
  return gulp.src(config.styles.src.globs, config.styles.src.options)
    .pipe($.if(config.development, $.plumber({
      errorHandler: $.notify.onError(error => {
        const options = {
          title: 'gulp styles - Error',
          message: error.message.replace($.ansiRegex(), ''),
          wait: true
        }

        return options
      })
    })))
    .pipe($.stylelint({
      reporters: [
        {
          failAfterError: true,
          formatter: 'string',
          console: true
        }
      ]
    }))
    .pipe($.if(!config.production, $.sourcemaps.init()))
    .pipe($.sassGlob())
    .pipe($.sass(config.styles.sass))
    .pipe($.postcss([
      $.autoprefixer(),
      $.cssMqpacker(config.styles.postcss.cssMqpacker),
      $.postcssAssets(config.styles.postcss.postcssAssets)
    ]))
    .pipe($.if(config.production, $.cleanCss(config.styles.cleanCss)))
    .pipe($.if(config.production, $.csso()))
    .pipe($.rename(path => {
      path.extname = '.css'
    }))
    .pipe($.if(!config.production, $.sourcemaps.write('maps')))
    .pipe(gulp.dest(config.paths.dest))
    .pipe($.if(config.production, $.gzip()))
    .pipe(gulp.dest(config.paths.dest))
    .pipe($.if(config.development, myServer.stream()))
}

gulp.task('styles', ['images'], styles)
