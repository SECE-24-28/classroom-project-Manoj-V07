import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Header = () => {
  const { isLoggedIn, role, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="bg-black h-[70px] items-center text-white flex justify-between">
      <h1 className="ml-8 text-[22px] font-bold">Manoj's ShopMate</h1>
      <ul className="gap-x-25 flex">
        <li className="hover:underline hover:text-blue-500 cursor-pointer"><Link to="/">Home</Link></li>
        <li className="hover:underline hover:text-blue-500 cursor-pointer"><Link to="/products">Products</Link></li>
        <li className="hover:underline hover:text-blue-500 cursor-pointer"><Link to="/cart">Cart</Link></li>
        <li className="hover:underline hover:text-blue-500 cursor-pointer"><Link to="/orders">Orders</Link></li>
        {role === 'admin' && (
          <li className="hover:underline hover:text-blue-500 cursor-pointer"><Link to="/addproduct">Add Product</Link></li>
        )}
      </ul>
      <div className="mr-10 flex gap-3">
        {isLoggedIn ? (
          <button 
            onClick={handleLogout}
            className="border-2 border-white hover:bg-red-500 hover:scale-105 duration-350 rounded-xl py-2 px-3"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="border-2 border-white hover:bg-blue-500 hover:scale-105 duration-350 rounded-xl py-2 px-3">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header