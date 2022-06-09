/**
 * 下载资源
 */

const fsExtra = require('fs-extra')
const fs = require('fs')
const request = require('request')
const path = require('path')
const util = require('util')
const asyncF = require('async')

const filePath = path.resolve(__dirname, './data.json')
const proxy = util.format('http://%s:%d', '127.0.0.1', 4780)

function downloadHandle(cover) {
  let fileName = cover.split('/').pop()
  request({ url: encodeURI('https://www.actiongameshub.com' + cover) })
    .pipe(
      fs.createWriteStream(`./images/${fileName}`).on('close', (err) => {
        console.log(err ? '写入失败' : fileName + '下载成功！', err)
      })
    )
    .on('error', (err) => {
      console.log('========', err)
    })
}
///images/games-scale/icon Bike Rush_副本.jpg
// downloadHandle()
const data = fsExtra.readFileSync(filePath)

asyncF.mapSeries(
  JSON.parse(data),
  function (item, callback) {
    //console.log(item);
    setTimeout(function () {
      downloadHandle(item.cover)
      callback(null, item)
    }, 100)
  },
  function () {}
)
module.exports = downloadHandle
