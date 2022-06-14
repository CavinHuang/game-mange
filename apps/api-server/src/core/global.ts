import { optionLogger } from '../config/config.log'
import { server, path, name, facePrefix, wock } from '../config/config.server'
import { crypto } from '../config/config.crypto'
import Logger from '../logger'

// 输出日志
export const G = new Logger(optionLogger.name, optionLogger.level, optionLogger.dir, optionLogger.option)

export const C = {
	server, crypto, path, name, facePrefix, wock
}
