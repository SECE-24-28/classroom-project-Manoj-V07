import { useState , useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Cart = () => {
   const [productsData, setProductsData] = useState([]);
  
    useEffect(() => {
      
      const fetchProducts = async () => {
          const response = await fetch('http://localhost:3000/carts');
          const data = await response.json();
          setProductsData(data);
      };
  
      fetchProducts();
    }, []);

    const handleRemoveProduct = (cartItemId) => {
      setProductsData(productsData.filter(product => product.cartItemId !== cartItemId))
    }

  return (
    <>
      <h1 className="text-center font-extrabold text-[30px] my-10">Cart</h1>
          <div className="flex justify-center flex-wrap gap-6 p-5">
              {productsData.map((product) => (
                  <ProductCard
                      key={product.cartItemId}
                      cartItemId={product.cartItemId}
                      id={product.id}
                      name={product.name}
                      description={product.description}
                      image={product.image}
                      originalPrice={product.originalPrice}
                      discountedPrice={product.discountedPrice}
                      isCart={true}
                      onRemove={handleRemoveProduct}
                  />
              ))}
          </div>
    </>
  )
}

export default Cart
