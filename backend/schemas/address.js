const mongoose = require('mongoose')
const { cepRegex } = require('../../util')

const addressSchema = mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        min: 1,
        required: true
    },
    neighborhood: {
        type: String,
        required: true
    },
    complement: {
        type: String,
        default: ''
    },
    CEP: {
        type: String,
        match: cepRegex,
        required: true
    },
    landmark: {
        type: String,
        default: ''
    }
})

module.exports = addressSchema