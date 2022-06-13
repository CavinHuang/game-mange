import { optionLogger } from '../config/config.log'
import { server, path, name, facePrefix, wock } from '../config/config.server'
import { crypto } from '../config/config.crypto'
import Logger from '../logger'
import MySQL from './db/mysql'
import { environment } from './env'

// 数据库
export const DB = new MySQL(environment.db)

// 输出日志
export const G = new Logger(optionLogger.name, optionLogger.level, optionLogger.dir, optionLogger.option)

export const C = {
	server, crypto, path, name, facePrefix, wock
}
