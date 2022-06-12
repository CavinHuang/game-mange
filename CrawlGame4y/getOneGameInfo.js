const httpRequest = require('./request')

module.exports = function getIframe(url, cb) {
  console.log('开始抓取远程iframe地址')
  httpRequest('get', url)(callback)

  function callback(err, res) {
    const domainReg = /let domain = '(\w+)'/gi
    const uaReg = /let\s*ua\s*=\s'(.*)'/gi
    const iframeReg =
      /<iframe id='iframe-game' height='100%' width='100%' frameborder='0' scrolling='no' src='(.*)'/gi

    const domainRes = domainReg.exec(res)
    let domain = ''
    if (domainRes && domainRes.length) {
      domain = domainRes[1]
    }

    const uaRes = uaReg.exec(res)
    let ua = ''
    if (uaRes && uaRes.length) {
      ua = uaRes[1]
    }

    const iframeRes = iframeReg.exec(res)
    let iframe = ''
    if (iframeRes && iframeRes.length) {
      iframe = iframeRes[1]
    }
    iframe = iframe
      .replace(/\"\+\s*/g, '')
      .replace(/\s*\+\"/, '')
      .replace(/\s*\+\"/, '')
      .replace('=domain', `=${domain}`)
      .replace('=ua', `=${ua}`)

    console.log('获取到的地址', iframe)

    cb(iframe)
  }
}
