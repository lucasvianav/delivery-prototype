const mongoose = require('mongoose')
const accountSchema = require('../schemas/accounts')

const Accounts = mongoose.model('Accounts', accountSchema)

module.exports = Accounts