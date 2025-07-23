import type { Logger } from 'pino'
import type * as Config from '../server/config.js'

declare module 'react-router' {
	export interface AppLoadContext {
		log: Logger
		config: typeof Config
	}

	export interface LoaderFunctionArgs extends DataFunctionArgs {
		context: {
			log: Logger
			config: typeof Config
		}
	}

	export interface ActionsFunctionArgs extends DataFunctionArgs {
		context: {
			log: Logger
			config: typeof Config
		}
	}
}
