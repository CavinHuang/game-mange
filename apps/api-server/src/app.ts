
import { Server } from './server'
import { typeOrm } from './models'
import config from './config'

typeOrm(() => {
  new Server(config)
})
