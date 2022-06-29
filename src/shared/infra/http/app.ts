import 'dotenv/config'

import express from 'express'
import 'express-async-errors'

const app = express()

app.use(express.json())

export { app }
