import { resolve } from 'path'


export const dirProject = resolve(__dirname, '..', '..')

export const dirLogs = resolve(dirProject, 'logs')
export const dirPublic = resolve(dirProject, 'public')

export const dirSrc = resolve(dirProject, 'src')

export const dirConfig = resolve(dirSrc, 'config')
export const dirLibs = resolve(dirSrc, 'libs')
export const dirRoutes = resolve(dirSrc, 'routes')



