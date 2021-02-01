const Products = require('../models/products')

const productsService = {
    find: async () => await Products.find(),

    findById: async (_id) => await Products.findById(_id),

    checkExistence: async (_id) => Boolean(await Products.findById(_id)),

    update: async (_id, updates) => {
        delete updates._id
        await Products.findByIdAndUpdate(_id, updates)
    },

    delete: async (_id) => Products.findByIdAndDelete(_id)
}

module.exports = productsService