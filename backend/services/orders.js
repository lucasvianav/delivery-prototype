const Orders = require('../models/orders')

const genOrderNumber = async () => {
    const orders = await Orders.find()
    let latest = 0
    
    for(let o of orders){
        if(o.number > latest){ latest = o.number }
    }
    
    return latest + 1
}
        
const ordersService = {
    find: async () => await Orders.find(),
    
    findById: async (_id) => await Orders.findById(_id),
    
    findByNumber: async (number) => await Orders.findOne({number}),

    checkExistence: async (_id) => await Orders.exists({_id}),

    create: async (order) => {
        delete order._id
        order.number = await genOrderNumber()
        
        return await Orders.create(order)
    },

    update: async (_id, updates) => {
        delete updates._id
        return await Orders.findByIdAndUpdate(_id, updates, options = { new: true })
    },

    delete: async (_id) => {
        try{
            Orders.findByIdAndDelete(_id)
            return true
        }
        
        catch{ return false }
    }
}

module.exports = ordersService