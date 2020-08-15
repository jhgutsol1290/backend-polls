const { Schema, model } = require('mongoose')

const chartSchema = new Schema({
    pollster: String,
    percentage: Number,
    created: {type: Date, default: Date.now()}
})

module.exports = model('Chart', chartSchema)