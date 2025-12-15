const Footer = () => {
  return (
    <footer className="bg-black flex justify-around py-6 mt-10">
      <div className="text-gray-200">
        <p className="text-sm">© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
      </div>
      <ul className="text-gray-100 flex flex-col">
        <h1 className="mb-3 font-bold text-[20px]">Quick Links</h1>
        <li className="mb-2"><a className="hover:underline hover:text-blue-500" href="#">Products</a></li>
        <li className="mb-2"><a className="hover:underline hover:text-blue-500" href="#">Cart</a></li>
        <li className="mb-2"><a className="hover:underline hover:text-blue-500" href="#">Orders</a></li>
        <li><a className="hover:underline hover:text-blue-500" href="#">Hot Deals</a></li>
      </ul>
       <ul className="text-gray-100 flex flex-col">
          <h1 className="mb-3 font-bold text-[20px]">Support Links</h1>
          <li className="mb-2"><a className="hover:underline hover:text-blue-500" href="#">FAQ</a></li>
          <li className="mb-2"><a className="hover:underline hover:text-blue-500" href="#">Shipping info</a></li>
          <li className="mb-2"><a className="hover:underline hover:text-blue-500" href="#">Returns</a></li>
          <li><a className="hover:underline hover:text-blue-500" href="#">Privacy Policy</a></li>
        </ul>
    </footer>
  )
}

export default Footer