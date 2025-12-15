const  ProductCard = ({ product }) => {
return (
    <div className="sm:w-[450px] bg-[#161b22] text-gray-200 hover:scale-105 duration-400 shadow-2xl hover:bg-[#1e242d] rounded-xl md:w-[350px] h-auto">
        <img className="rounded-t-xl w-full h-[200px] object-cover" src={product.thumbnail} alt={product.name} />
        <div className="p-4">
            <h3 className="font-extrabold text-[19px] mb-3">{product.name}</h3>
            <p className="text-[17.5px] mb-3">{product.description}</p>
            <div className="prices mb-3">
                <span className="font-bold text-[15px] line-through">₹{product.price}/-</span>
                <span className="text-[19px] font-bold ml-3 animate-pulse">₹{product.discountPrice}/-</span>
                <span className="text-[19px] font-bold ml-1">only</span>
            </div>
            <button className="border-2 rounded-xl bg-gray-200 text-gray-800 p-1">Add to Cart</button>
            <button className="border-2 rounded-xl bg-gray-200 text-gray-800 p-1 ml-3">View Details</button>
        </div>
    </div>
);
}

export default ProductCard;