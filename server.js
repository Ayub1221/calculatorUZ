const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const calRouter = require('./route/calRouter')
const app = express()


app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
// app.use(bodyParser.json())



const DB = 'mongodb+srv://culuz:abc123456@cluster0.xk6os.mongodb.net/culuzcard?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(() => console.log('ConnectedDB'))


app.use('/api/v1/cal', calRouter)

const port = 8000
app.listen(port, () => {
    console.log('AppRuing');
})