import 'reflect-metadata'
import 'dotenv/config'
import 'express-async-errors'

import cors from 'cors'
import express from 'express'
import swaggerUi from 'swagger-ui-express'

import { appConfig } from '@config/app'
import swaggerFile from '@shared/infra/http/docs/swagger/swagger.json'

import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

if (appConfig.env !== 'production') {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
}

export { app }
