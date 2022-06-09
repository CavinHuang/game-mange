/**
 * 下载资源
 */

const fsExtra = require('fs-extra')
const fs = require('fs')
const request = require('request')
const path = require('path')
const util = require('util')
const asyncF = require('async')
const Bagpipe = require('bagpipe')
const bagpipe = new Bagpipe(10, {
  timeout: 1000
})

const filePath = path.resolve(__dirname, './data.json')
const proxy = util.format('http://%s:%d', '127.0.0.1', 4780)

function downloadHandle(cover) {
  let fileName = cover.split('/').pop()
  const url =
    cover.indexOf('http') > -1
      ? cover
      : 'https://www.actiongameshub.com' + cover
  console.log('开始下载', url)
  request({ url: encodeURI(url), proxy })
    .pipe(
      fs
        .createWriteStream(`./images/${fileName}`)
        .on('close', (err) => {
          console.log(err ? '写入失败' : fileName + '下载成功！', err)
        })
        .on('error', (err) => {
          console.log(err)
        })
    )
    .on('error', (err) => {
      console.log('========', err)
    })
}
///images/games-scale/icon Bike Rush_副本.jpg
// downloadHandle()
const data = fsExtra.readFileSync(filePath)

// asyncF.mapSeries(
//   JSON.parse(data),
//   function (item, callback) {
//     //console.log(item);
//     setTimeout(function () {
//       downloadHandle(item.cover)
//       callback(null, item)
//     }, 1000)
//   },
//   function (err, result) {
//     console.log('err', err)
//     console.log('result', result)
//   }
// )
const items = JSON.parse(data)
const len = items.length
console.log(len)
for (let i = 0; i < len; i++) {
  const { cover } = items[i]
  console.log('cover', cover)
  bagpipe.push(downloadHandle, cover)
}

bagpipe.on('full', function (length) {
  console.warn(
    `Button system cannot deal on time, queue jam, current queue length is: ${length}`
  )
})

module.exports = downloadHandle
