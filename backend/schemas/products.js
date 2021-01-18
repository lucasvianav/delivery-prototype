const mongoose = require('mongoose')
const imgSchema = require('./images')

const priceSchema = mongoose.Schema({
    full: {
        type: Number,
        required: true
    },
    display: {
        type: Number,
        required: true
    },
})

const productSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    visible: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        trim: true,
        required: true
    },
    description: String,
    price: {
        type: priceSchema,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    img: {
        type: imgSchema,
        required: true
    }
})

module.exports = productSchema