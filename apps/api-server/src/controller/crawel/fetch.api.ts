import { CoreController } from '../CoreController'
import { fork } from 'child_process'
import { resolve } from 'path'
import glob from 'glob'

const config = {
  imgPath: resolve(__dirname, './static'),
  txtPath: resolve(__dirname, './db')
}

// 创建异步线程
function createPromisefork(childUrl, data) {
  const res = fork(childUrl)
    data && res.send(data)
    return new Promise(reslove => {
      res.on('message', f => {
        reslove(f)
      })
    })
}

interface TQuery {
  url: string
}

export default class CrawelFetch extends CoreController {
  public method: string = 'get'

  public async handle(raw: TQuery, ctx: any,routeFinal: any,$: any) {
    console.log('参数', raw)
    const res = await createPromisefork(resolve(__dirname, './child.js'), raw.url)
    // 获取文件路径
    const txtUrls = [];
    let reg = /.*?(\d+)\.\w*$/;
    glob.sync(`${config.txtPath}/*.*`).forEach(item => {
      if(reg.test(item)) {
        txtUrls.push(item.replace(reg, '$1'))
      }
    })

    ctx.body = {
      state: res,
      data: txtUrls,
      msg: res ? '抓取完成' : '抓取失败,原因可能是非法的url或者请求超时或者服务器内部错误'
    }
  }
}