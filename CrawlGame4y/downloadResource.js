/**
 * 下载资源
 */

const fsExtra = require('fs-extra')
const fs = require('fs')
const request = require('request')
const path = require('path')
const util = require('util')

const filePath = path.resolve(__dirname, './data.json')
const proxy = util.format('http://%s:%d', '127.0.0.1', 4780)

function downloadHandle() {
  const data = fsExtra.readFileSync(filePath)
  JSON.parse(data).forEach((item) => {
    const { cover } = item
    let fileName = cover.split('/').pop()
    request({ url: encodeURI('https://www.actiongameshub.com' + cover), proxy })
      .pipe(
        fs.createWriteStream(`./images/${fileName}`).on('close', (err) => {
          console.log(err ? '写入失败' : fileName + '下载成功！', err)
        })
      )
      .on('error', (err) => {
        console.log('========', err)
      })
  })
}
///images/games-scale/icon Bike Rush_副本.jpg
downloadHandle()

module.exports = downloadHandle
