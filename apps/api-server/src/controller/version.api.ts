import FX from 'fs-extra'

export const optionAPI = { skipPerm: true }
export const method = 'get'

export const handle = function () {
	try {
		return FX.readJSONSync('package.json', 'utf8').version
	}
	catch {
		throw Error('读取版本失败')
	}
}