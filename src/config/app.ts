import 'dotenv/config'

type Env = 'local' | 'development' | 'production'

interface IAppConfig {
  port: number
  env: Env
}

export const appConfig: IAppConfig = {
  port: Number(process.env.PORT) || 3333,
  env: process.env.NODE_ENV || 'local'
} as IAppConfig
