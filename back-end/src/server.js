import express from 'express'
import morgan from 'morgan'
import api from './router/api'
import bodyParser from 'body-parser'
import './db/db'

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', api)

export default app
