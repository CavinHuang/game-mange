import { C ,G } from './core/global'

import { dirController, dirPublic } from './core/global.dir';
import { resolve } from 'path'

import initRoute from './core/initRoute'

import ParseExtra from './core/mare/ParseExtra'
import CheckPerm from './core/mare/CheckPerm'
import ParseCookies from './core/mare/ParseCookies'
import ResultParser from './core/mare/ResultParser'

const { faces, folds } = initRoute(dirController)

export default {
	name: C.name,
	favicon: resolve(dirPublic, 'favicon.ico'),
	server: C.server,
	crypto: C.crypto,
	mare: {
		before: ['parseRaw', ParseExtra, CheckPerm],
		after: [ParseCookies, ResultParser]
	},
	facePrefix: C.facePrefix,
	faces, folds,
	logger: G,
	wock: C.wock,
}