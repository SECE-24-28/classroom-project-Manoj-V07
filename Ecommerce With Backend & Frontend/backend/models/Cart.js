const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema(
    {
        cartItemId : {
            type : String,
            required : true,
            unique : true
        },
        id : {
            type : String,
            required : true
        },
        name : {
            type : String,
            required : true
        },
        description : {
            type :String,
            required : true
        },
        image : {
            type : String,
            required : true
        },
        originalPrice : {
            type  : Number,
            required : true
        },
        discountedPrice : {
            type : Number,
            required : true
        }
    }, 
    {
        timestamps : true
    }
)

module.exports = mongoose.model('Cart', cartSchema)