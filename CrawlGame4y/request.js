const request = require('request')
const util = require('util')

function httpRequest(method, url, data) {
  // 封装request请求 post get
  console.log(url, '真实的java接口地址')
  const proxy = util.format('http://%s:%d', '127.0.0.1', 4780)
  if (method == 'get') {
    return function (cb) {
      try {
        // console.log(`request ${this.id} has been sent at: ${start}` );
        request(
          {
            url: url,
            method: 'GET',
            data,
            proxy
          },
          function (error, response, body) {
            cb(error, body)
          }
        )
      } catch (err) {
        console.error('response data error', err)
        cb(err, null)
      }
    }.bind(this)
  } else if (method == 'post') {
    return function (cb) {
      try {
        request(
          {
            url: requestUrl,
            method: 'POST',
            form: data,
            proxy
          },
          function (error, response, body) {
            cb(null, body)
          }
        )
      } catch (err) {
        console.error('response data error', err)
        cb(err, null)
      }
    }.bind(this)
  }
}

module.exports = httpRequest
