const mongoose = require('mongoose')
const orderSchema = require('../schemas/orders')

const Orders = mongoose.model('Orders', orderSchema)

module.exports = Orders