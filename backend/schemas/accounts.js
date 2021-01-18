const mongoose = require('mongoose')
const { emailRegex, phoneRegex, CPF } = require('../../util')
const addressSchema = require('./address')

const cartItemSchema = mongoose.Schema({
    productId: {
        type: ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        default: ''
    }
})

const accountSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        match: emailRegex,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        match: phoneRegex,
        required: true
    },
    type: {
        type: String,
        enum: ['admin', 'client', 'driver'],
        required: true
    },
    cpf: {
        type: String,
        trim: true,
        validate: (new CPF()).isValid,
        required: true
    },
    addresses: {
        type: [addressSchema],
        default: []
    },
    cart: {
        type: [cartItemSchema],
        default: []
    }
})

module.exports = accountSchema