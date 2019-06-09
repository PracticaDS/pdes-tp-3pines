import express from 'express'
import morgan from 'morgan'
import api from './router/api'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
mongoose.connect('mongodb+srv://pdes-grupo2:3pines@pdes-grupo2-lgx7t.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', api)

export default app
