import { C } from '../core/global'
import { resolve } from 'path'

export default [
	{ route: '/reso', path: resolve(C.path.arch, 'image'), option: { defer: true, maxage: 1000 * 60 * 60 * 6 } },
	{ route: '/reso', path: resolve(C.path.arch, 'video'), option: { defer: true, maxage: 1000 * 60 * 60 * 6 } },
	{ route: '/reso', path: resolve(C.path.arch, 'file'), option: { defer: true, maxage: 1000 * 60 * 60 * 6 } }
];