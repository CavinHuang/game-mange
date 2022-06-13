import { resolve, join, parse, sep, basename, posix } from 'path'
import ReaddirRecur from 'fs-readdir-recursive'
import { CoreController } from '../routes/CoreController'

const initRoute = (pathAPP) => {
	const faces = []
	const folds = []

	const filesAPP = ReaddirRecur(pathAPP)

  console.log(filesAPP)

	filesAPP.filter(file => file.endsWith('.api.ts')).forEach(async (fileAPI)=>{
		const infoAPI = parse(fileAPI)
		const pathAPI = join(pathAPP, fileAPI)

		const api = await import(pathAPI)

    console.log(api)
    let result: CoreController | null = null
    if (api.default) {
      result = new api.default()
    }

    if (!result) return
		faces.push({
			route: posix.join(
				...infoAPI.dir.split(sep),
				basename(infoAPI.base, '.api.ts')
			),
			method: result.method ?? 'get',
			handle: result.handle,
			upload: result.upload ?? false,
			option: Object.assign({ parseResult: true }, result.apiOptions)
		})
	})

	filesAPP.filter(p => p.endsWith('.map.ts')).forEach(async (fileMAP) => {
		const pathMAP = resolve(pathAPP, fileMAP)
		const dirMAP = parse(pathMAP).dir
		const maps = (await import(pathMAP)).default
		maps.forEach(({ route, path }) =>
			folds.push({
				route,
				path: resolve(dirMAP, path)
			})
		)
	})

	return { faces, folds }
}


export default initRoute