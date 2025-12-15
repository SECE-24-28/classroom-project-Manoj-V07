const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

const connectDB = require('./config/db')
connectDB()


const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/carts')
const authRoutes = require('./routes/auth')


app.use('/auth', authRoutes)
app.use('/products',productRoutes)
app.use('/carts',cartRoutes)

app.listen(3000 , (req,res) => {
    console.log('Server is listening to port 3000')
})
