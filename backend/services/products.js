const Products = require('../models/products')

const productsService = {
    find: async () => await Products.find(),

    findById: async (_id) => await Products.findById(_id),

    checkExistence: async (_id) => await Products.exists({_id}),

    create: async (product) => {
        delete product._id
        return await Products.create(product)
    },

    update: async (_id, updates) => {
        delete updates._id
        return await Products.findByIdAndUpdate(_id, updates, options = { new: true })
    },

    delete: async (_id) => {
        try{ 
            await Products.findByIdAndDelete(_id) 
            return true
        }

        catch{ return false }
    }
}

module.exports = productsService