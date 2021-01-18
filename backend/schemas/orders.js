const mongoose = require('mongoose')
const { phoneRegex, priceRegex, dateRegex, timeRegex } = require('../../util')
const addressSchema = require('./address')
const imgSchema = require('./images')

const clientSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        match: phoneRegex,
        required: true
    }
})

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        match: priceRegex,
        required: true
    },
    img: {
        type: imgSchema,
        required: true
    },
    notes: {
        type: String,
        default: ''
    },
    quantity: {
        type: Number,
        min: 1,
        required: true
    }
})

const feeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    value: {
        type: String,
        match: priceRegex,
        required: true
    }
})

const orderSchema = mongoose.Schema({
    products: {
        type: [productSchema],
        required: true
    },
    client: {
        type: clientSchema,
        required: true
    },
    address: {
        type: addressSchema,
        required: true
    },
    fees: {
        type: [feeSchema],
        required: true
    },
    notes: {
        type: String,
        default: ''
    },
    discount: {
        type: String,
        match: priceRegex,
        required: true
    },
    total: {
        type: String,
        match: priceRegex,
        required: true
    },
    date: {
        type: String,
        trim: true,
        validate: dateRegex,
        required: true
    },
    time: {
        type: String,
        trim: true,
        validate: timeRegex,
        required: true
    }
})

module.exports = orderSchema