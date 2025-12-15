import axios from 'axios'

const ProductCard = ({cartItemId, id, name , description , image , originalPrice , discountedPrice, isCart = false, onRemove}) => {

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('http://localhost:3000/carts', {
          id,
          name,
          description,
          image,
          originalPrice,
          discountedPrice
      })

      alert('Product added to cart!')
    } catch (err) {
      alert('Error adding to cart: ' + err.message)
    }
  }

  const handleRemoveFromCart = async () => {
    try {
      await axios.delete(`http://localhost:3000/carts/${cartItemId}`)

      if (onRemove) {
        onRemove(cartItemId)
      }
      alert('Product removed from cart!')
    } catch (err) {
      alert('Error removing from cart: ' + err.message)
    }
  }

  return (
    <div className="border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full bg-white w-[280px] overflow-hidden">
        <div className="w-full h-[200px] bg-gray-200 overflow-hidden">
            <img src={image} alt={name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="p-4 flex flex-col justify-between flex-1">
            <div>
                <h2 className="font-bold mb-3 text-[18px] line-clamp-2">{name}</h2>
                <div className="flex items-center mb-3 gap-2">
                    <span className="font-bold text-[17px] text-green-600">₹{discountedPrice}</span>
                    <span className="text-[14px] line-through text-gray-500">₹{originalPrice}</span>
                </div>
                <p className="text-[14px] text-gray-700 line-clamp-3">{description}</p>
            </div>
            {isCart ? (
              <button onClick={handleRemoveFromCart} className="w-full hover:scale-105 hover:text-white hover:bg-red-500 cursor-pointer border-2 border-black duration-350 rounded-xl p-2 mt-4 font-medium">Remove from Cart</button>
            ) : (
              <button onClick={handleAddToCart} className="w-full hover:scale-105 hover:text-white hover:bg-blue-500 cursor-pointer border-2 border-black duration-350 rounded-xl p-2 mt-4 font-medium">Add to Cart</button>
            )}
        </div>
    </div>
  )
}

export default ProductCard
