const express = require('express')
const Cart = require('../models/Cart')
const router = express.Router()

router.get('/' , async (req,res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json({ message : 'Error fetching carts' , error})
    }
})


router.get('/:id' , async (req,res) => {
    try {
        const cart = await Cart.findOne({ id : req.params.id })
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json({ message : 'Cart fetched successfully' , cart})
    } catch (error) {
        res.status(500).json({ message : 'Error fetching cart' , error})
    }
})

router.delete('/:cartItemId', async (req,res) => {
    try {
        const cart = await Cart.findOneAndDelete({ cartItemId : req.params.cartItemId })
        if (!cart) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        res.status(200).json({ message : 'Cart item deleted successfully'})
    } catch (error) {
        res.status(500).json({ message : 'Error deleting cart item' , error})
    }
})

router.post('/' , async (req,res) => {
    try {
        const { id , name , description , image , originalPrice , discountedPrice } = req.body
        const cartItemId = Date.now().toString() + Math.random().toString(36).substr(2, 9)
        const newCart = await Cart.create({ cartItemId, id, name, description, image, originalPrice, discountedPrice })
        res.status(201).json({ message : "Cart item added successfully", newCart})
    } catch (error) {
        res.status(500).json({ message : 'Error adding cart item' , error})
    }
})


module.exports = router