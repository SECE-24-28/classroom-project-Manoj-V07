import { useState } from "react"
import axios from 'axios'

const AddProduct = () => {

      const [ name , setName ] = useState('')
      const [ description , setDescription ] = useState('')
      const [ image , setImage ] = useState('')
      const [ originalPrice , setOriginalPrice ] = useState(0)
      const [ discountedPrice , setDiscountPrice ] = useState(0)


      const handleChangeDescription = (event) => {
          setDescription(event.target.value)
      }
  
      const handleChangeName = (event) => {
          setName(event.target.value)
      }
  
      const handleChangeImage = (event) => {
          setImage(event.target.value)
      }
  
      const handleChangeOriginalPrice = (event) => {
          setOriginalPrice(event.target.value)
      }
  
      const handleChangeDiscountPrice = (event) => {
          setDiscountPrice(event.target.value)
      }
  
      const handleSubmit = async (event) => {
          event.preventDefault()
          
          const response = await axios.post('http://localhost:3000/products', {
              id: Date.now(),
              name,
              description,
              image,
              originalPrice: parseFloat(originalPrice),
              discountedPrice: parseFloat(discountedPrice)
          })
  
          setName("");
          setDescription("");
          setImage("");
          setOriginalPrice(0);
          setDiscountPrice(0);  
          alert("Product added successfully!");
      }


  return (
    <div className="w-[350px] h-[630px] m-auto p-5 rounded-2xl shadow-2xl">
        <h2 className="font-bold text-center text-[22px] mb-5">Product Information</h2>

        <label className="block mb-2">Enter Product Name : </label> 
        <input type="name" placeholder="Product Name" className="p-2 w-[96%] border-2 rounded-xl mb-5"  value={name} onChange={handleChangeName} required/> <br />

        <label className="block mb-2">Enter Product Description : </label> 
        <input type="name" placeholder="Description" className="p-2 w-[96%] border-2 rounded-xl mb-5" value={description} onChange={handleChangeDescription} required/> <br />

        <label className="block mb-2">Enter Image URL : </label> 
        <input type="name" placeholder="Image URL" className="p-2 w-[96%] border-2 rounded-xl mb-5" value={image} onChange={handleChangeImage} required/> <br />

        <label className="block mb-2">Enter Original Price (in INR): </label> 
        <input type="number" placeholder="Original Price" className="p-2 w-[96%] border-2 rounded-xl mb-5" value={originalPrice} onChange={handleChangeOriginalPrice} required/> <br />

        <label className="block mb-2">Enter Discount Price (in INR): </label> 
        <input type="number" placeholder="Discount Price" className="p-2 w-[96%] border-2 rounded-xl mb-8" value={discountedPrice} onChange={handleChangeDiscountPrice} required/> <br />

        <button className="w-[96%] border-2 border-black hover:scale-105 duration-350 rounded-xl p-2 hover:text-white hover:bg-blue-500 mb-2 cursor-pointer" onClick={handleSubmit}>Add Product</button>
    </div>
  )
}

export default AddProduct