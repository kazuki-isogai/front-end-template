import config from '../config'
import del from 'del'

export default function clean () {
  return del(config.clean.del.patterns, config.clean.del.options)
}
