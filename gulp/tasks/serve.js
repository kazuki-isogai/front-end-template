import config from '../config'

export default function serve () {
  return config.myServer.init(config.serve.browserSync)
}
