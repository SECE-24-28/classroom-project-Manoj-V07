import ProductCard from "../components/ProductCard";

const Home = () => {
        const products =  [ {
            id: 1,
            name: "Wireless Bluetooth Headphones",
            description: "Noise-cancelling over-ear headphones with 20hr battery life.",
            image : "https://images.unsplash.com/photo-1764970692776-ce5fb30a7509?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
            originalPrice: 2999,
            discountedPrice: 1999
        },
        {
            id: 2,
            name: "Smart Fitness Band",
            description: "Heart-rate monitor, sleep tracking, and step counter.",
            image : "https://images.unsplash.com/photo-1764970692776-ce5fb30a7509?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
            originalPrice: 1999,
            discountedPrice: 1299
        },
        {
            id: 3,
            name: "USB-C Fast Charger 25W",
            description: "Superfast Type-C charger compatible with most smartphones.",
            image : "https://images.unsplash.com/photo-1764970692776-ce5fb30a7509?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
            originalPrice: 1499,
            discountedPrice: 899
        },
        {
            id: 4,
            name: "Laptop Cooling Pad",
            description: "Dual-fan cooling pad with adjustable height settings.",
            image : "https://images.unsplash.com/photo-1764970692776-ce5fb30a7509?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
            originalPrice: 2499,
            discountedPrice: 1699
        },
        {
            id: 5,
            name: "Gaming Mouse RGB",
            description: "Ergonomic mouse with 6 programmable buttons.",
            image : "https://images.unsplash.com/photo-1764970692776-ce5fb30a7509?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
            originalPrice: 1799,
            discountedPrice: 1099
        }
    ];

  return (
    <>
        <div className="flex flex-col md:flex-row p-5 mt-15 justify-start items-center">
            <div className="p-5">
                <h2 className="mb-4 text-[30px] font-extrabold">Upgrade Your Lifestyle with Smart Choices</h2>
                <p className="text-[18px] text-sm/10">
                    Discover a world of top-quality products curated just for you.
                    From the newest gadgets to everyday essentials, everything is here.
                    Shop with confidence, enjoy unbeatable deals, and fast delivery.
                    Find what you love — all in one seamless shopping experience.
                </p>
                <button className="border-2 border-black mt-10 rounded-xl p-2 hover:bg-blue-500 hover:text-white hover:scale-105 cursor-pointer duration-325">View All The Products</button>
            </div>
            <div>
                <img className="w-[1200px] mt-10 md:mt-0 h-auto rounded-3xl" src="https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=2048x2048&w=is&k=20&c=RjYs5hYBJddTuiIhHokANVdvVfh89yl1YRCIxheJkzw=" alt="Inspirational Image"/>
            </div>
        </div>
        <h1 className="text-center font-extrabold text-[30px] my-10">Top Featured Product</h1>
        <div className="flex justify-center flex-wrap gap-6 px-4 pb-10">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
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

export default Home