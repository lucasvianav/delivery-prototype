const productsService = require('../services/products')

const productsController = {
    find: async (req, res) => {
        const products = await productsService.find()
        
        return res.json(products).status(200)
    },
    
    findById: async(req, res) => {
        const {_id} = req.params
        const product = await productsService.findById(_id)

        return product ? res.json(product).status(200) : res.json().status(404)
    },
    
    checkExistence: async (req, res) => {
        const {_id} = req.params
        const existence = await productsService.checkExistence(_id)
        
        return res.json(existence)
    },
    
    create: async (req, res) => {
        const {product} = req.body
        const newProduct = await productsService.create(product)
        
        return newProduct ? res.json(newProduct).status(200) : res.json().status(400)
    },

    update: async (req, res) => {
        const {_id, updates} = req.body
        const product = await productsService.update(_id, updates)
        
        return res.json(product).status(200)
    },

    delete: async (req, res) => {
        const {_id} = req.params
        result = await productsService.delete(_id) 
        
        return result ? res.status(200).json(true) : res.status(404).json(false)
    }
}

module.exports = productsController