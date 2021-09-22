
const mongoose = require('mongoose')

const caluSchema = mongoose.Schema({
    numberA: Number,
    numberB: Number,
    operator: String,
    data: {
        type: Date,
        default: Date.now
    }
})



const Calculator = mongoose.model('Calculator', caluSchema)
module.exports = Calculator