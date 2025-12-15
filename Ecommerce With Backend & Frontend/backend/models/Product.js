const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        id : {
            type : String,
            required : true,
            unique : true
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

module.exports = mongoose.model('Product', productSchema)