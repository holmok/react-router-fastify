import { reactRouterFastify } from '@mcansh/remix-fastify/react-router'
import { fastify } from 'fastify'
import Pino from 'pino'
import * as Config from './config.js'

const log = Pino(Config.pinoOptions)

const app = fastify({
  loggerInstance: log,
  disableRequestLogging: Config.isDevelopment
})

const startServer = async () => {
  const port = Config.SERVER_PORT
  const host = Config.SERVER_HOST
  try {
    app.register(reactRouterFastify, {
      getLoadContext: (req, res) => {
        return {
          log,
          config: Config
        }
      }
    })
    const address = await app.listen({ port, host })
    log.info(`🚀 Server started at ${address}`)
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message)
    }
    process.exit(1)
  }
}

await startServer()
