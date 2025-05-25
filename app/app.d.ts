import { Logger } from 'Pino'
import * as Config from '../server/config.js'

declare module 'react-router' {
  export interface AppLoadContext {
    log: Logger
    config: typeof Config
  }

  export interface LoaderArgs extends DataFunctionArgs {
    context: {
      log: Logger
      config: typeof Config
    }
  }

  export interface ActionArgs extends DataFunctionArgs {
    context: {
      log: Logger
      config: typeof Config
    }
  }
}

export {}
