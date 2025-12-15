import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from 'axios'

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    
    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:3000/products')
        setProductsData(response.data);
    };

    fetchProducts();
  }, []);


  return (
    <>
        <h1 className="text-center font-extrabold text-[30px] my-10">Products</h1>
        <div className="flex justify-center flex-wrap gap-6 p-5">
            {productsData.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    originalPrice={product.originalPrice}
                    discountedPrice={product.discountedPrice}
                />
            ))}
        </div>
    </>
  )
}

export default Products