import 'dotenv/config'

interface IAppConfig {
  port: number
}

export const appConfig: IAppConfig = {
  port: Number(process.env.PORT) || 3333
}
