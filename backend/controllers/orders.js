const ordersService = require('../services/orders')

const ordersController = {
    find: async (req, res) => {
        const orders = await ordersService.find()
        
        return res.json(orders).status(200)
    },
    
    findById: async (req, res) => {
        const {_id} = req.params
        const order = await ordersService.findById(_id)
        
        return order ? res.json(order).status(200) : res.json().status(404)
    },

    findByNumber: async (req, res) => {
        const {number} = req.params
        const order = await ordersService.findById(number)
        
        return order ? res.json(order).status(200) : res.json().status(404)
    },
    
    checkExistence: async (req, res) => {
        const {_id} = req.params
        const existence = await ordersService.checkExistence(_id)
        
        return res.json(existence)
    },

    create: async (req, res) => {
        const {order} = req.params
        const newOrder = await ordersService.create(order)
        
        return newOrder ? res.json(newOrder).status(200) : res.json().status(400)
    },
    
    update: async (req, res) => {
        const {_id, updates} = req.params
        const order = await ordersService.update(order)
        
        return order ? res.json(order).status(200) : res.json().status(404)
    },

    delete: async (req, res) => {
        const {_id} = req.params
        result = await ordersService.delete(_id) 
        
        return result ? res.status(200).json(true) : res.status(404).json(false)
    }
}

module.exports = ordersController