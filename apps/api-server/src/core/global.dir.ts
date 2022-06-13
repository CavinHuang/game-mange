import { resolve } from 'path'


export const dirProject = resolve(__dirname, '..', '..')

export const dirLogs = resolve(dirProject, 'logs')
export const dirPublic = resolve(dirProject, 'public')

export const dirSrc = resolve(dirProject, 'src')

export const dirConfig = resolve(dirSrc, 'config')
export const dirCore = resolve(dirSrc, 'core')
export const dirController = resolve(dirSrc, 'controller')



