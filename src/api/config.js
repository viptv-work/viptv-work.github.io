export const commonParams = {
  g_tk : 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const options = {
  param: 'jsonpCallback',
  prefix: 'jp'
}
export const URL = process.env.NODE_ENV === 'production' ? 'http://live.miguvideo.com': '/api'
export const VERSION = '1.0.0'