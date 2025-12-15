import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
    .then((res) => res.json())
    .then((data) => setProducts(data.products));
  }, []);


return (
  <div className="text-gray-200">
    <h2 className="mb-10 mt-10 text-[30px] font-extrabold text-center">Products</h2>
    <div className="flex items-center gap-5 ml-8 flex-wrap justify-start">
    {products.map((product, index) => (
    <ProductCard key={index} product={product} />
    ))}
    </div>
  </div>
);
}

export default Products;