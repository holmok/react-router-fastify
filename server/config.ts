import Pino from 'pino'

export const appName = 'react-router-fastify'

export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'

export const SERVER_PORT = Number(process.env.PORT ?? 3000)
export const SERVER_HOST = process.env.HOST ?? 'localhost'

const devPinoOptions: Pino.LoggerOptions = {
  name: process.env.LOG_NAME ?? 'rrf',
  level: 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      singleLine: true,
      messageKey: 'msg',
      levelFirst: true,
      ignore: 'pid,hostname',
      translateTime: true
    }
  }
}

const productionPinoOptions: Pino.LoggerOptions = {
  name: process.env.LOG_NAME ?? 'rrf',
  level: process.env.LOG_LEVEL ?? 'info',
  formatters: {
    level(label) {
      return { level: label }
    }
  }
}

export const pinoOptions = isProduction ? productionPinoOptions : devPinoOptions
