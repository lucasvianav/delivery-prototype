const mongoose = require('mongoose')
const productSchema = require('../schemas/products')

const Products = mongoose.model('Products', productSchema)

module.exports = Products