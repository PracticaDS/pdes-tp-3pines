import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://pdes-grupo2:3pines@pdes-grupo2-lgx7t.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
})