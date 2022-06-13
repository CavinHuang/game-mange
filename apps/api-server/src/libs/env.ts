import * as dev from '../config/env.dev'; // 开发环境下的配置文件
import * as prop from '../config/env.prod'; // 生产环境下的配置文件

const env = process.env.NODE_ENV;

let environment = env !== 'development' ? prop: dev;

export { environment };
