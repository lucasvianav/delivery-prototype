const mongoose = require('mongoose')

const imgSchema = mongoose.Schema({
    URI: {
        type: String,
        required: true,
        trim: true
    },
    altText: {
        type: String,
        required: true
    }
})

module.exports = imgSchema