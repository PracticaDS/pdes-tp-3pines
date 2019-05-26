import express from 'express'
import morgan from 'morgan'
import api from './router/api'

const app = express()
app.use(morgan('dev'))
app.use('/api', api)

export default app
