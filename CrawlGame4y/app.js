const cheerio = require('cheerio')
const httpRequest = require('./request')
const path = require('path')
const fsExtra = require('fs-extra')

const downloadHandle = require('./downloadResource')

// axios.get('https://www.actiongameshub.com/').then((res) => {
//   const $ = cheerio.load(res.data)
//   getHomeHotList($)
// })
const filePath = path.resolve(__dirname, './data.json')

fsExtra.writeFileSync(filePath, '')
saveContent('[')
httpRequest('get', 'https://www.actiongameshub.com/')(responseHandler)

function responseHandler(err, res) {
  const $ = cheerio.load(
    res
      .replace(/<head>[\s\S]*?<\/head>/gi, '')
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style>[\s\S]*?<\/style>/gi, '')
  )
  $('#web_head').remove()
  $('#head').remove()
  $('.menubox').remove()
  $('.ads').remove()
  getHomeHotList($)
}

function getHomeHotList($) {
  const els = $('#container-fluid .grid-item')
  let result = ''
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    const a = $(el).find('a')
    result += `
  {
    "url": "${a.attr('href')}",
    "name": "${a.attr('title')}",
    "cover": "${$(el).find('img').attr('data-src')}"
  },
    `
  }
  saveContent(result)
  loadMore()
}

let page = 3
function loadMore(page = 3) {
  httpRequest(
    'get',
    `https://www.actiongameshub.com/api/home_cate/hot-games?page=${page}`
  )(responseMoreHandler)
}

function responseMoreHandler(err, res) {
  const data = JSON.parse(res)

  if (err || !res || data.html === '') {
    saveContent(']')
    return
  }

  const $ = cheerio.load(
    data.html
      .replace(/<head>[\s\S]*?<\/head>/gi, '')
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style>[\s\S]*?<\/style>/gi, '')
  )
  $('#web_head').remove()
  $('#head').remove()
  $('.menubox').remove()
  $('.ads').remove()
  getMoreHotList($)
}

function getMoreHotList($) {
  const els = $('li')
  let result = ''
  for (let i = 0; i < els.length; i++) {
    const el = els[i]
    const a = $(el).find('a')
    result += `
  {
    "url": "${a.attr('href')}",
    "name": "${a.attr('title')}",
    "cover": "${$(el).find('img').attr('data-src')}"
  },
    `
  }
  saveContent(result)
  page = page + 1
  loadMore(page)
}

function saveContent(content) {
  fsExtra.appendFileSync(filePath, content)
}
