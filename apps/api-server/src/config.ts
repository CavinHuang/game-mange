import { C ,G } from './libs/global'

import { dirRoutes, dirPublic } from './libs/global.dir';
import { resolve } from 'path'

import initRoute from './libs/initRoute'

import ParseExtra from './libs/mare/ParseExtra'
import CheckPerm from './libs/mare/CheckPerm'
import ParseCookies from './libs/mare/ParseCookies'
import ResultParser from './libs/mare/ResultParser'


const { faces, folds } = initRoute(dirRoutes)


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