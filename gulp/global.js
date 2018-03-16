import gulpLoadPlugins from 'gulp-load-plugins'
import config from './config'

export const plugins = gulpLoadPlugins(config.plugins.options)
