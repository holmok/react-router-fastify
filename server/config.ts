import type Pino from 'pino'

export const appName = 'react-router-fastify'

export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'

export const port = Number(process.env.SERVER_PORT ?? 3000)
export const host = process.env.SERVER_HOST ?? 'localhost'

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
