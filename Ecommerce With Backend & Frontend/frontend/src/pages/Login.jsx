import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [role, setRole] = useState('user')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login, register } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email.trim() || !password.trim()) {
      alert('Please fill in all fields')
      return
    }

    setLoading(true)
    let success
    
    if (isLogin) {
      success = await login(email, password)
    } else {
      success = await register(email, password, role)
    }

    setLoading(false)
    
    if (success) {
      navigate('/')
    }
  }

  return (
    <div className="w-[350px] h-auto m-auto p-5 rounded-2xl shadow-2xl">
      <h2 className="font-bold text-center text-[22px] mb-5">
        {isLogin ? 'Login' : 'Register'}
      </h2>
      
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Email:</label> 
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="p-2 w-[96%] border-2 rounded-xl mb-5" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label className="block mb-2">Password:</label>
        <input 
          type="password" 
          placeholder="Enter your password" 
          className="p-2 w-[96%] border-2 rounded-xl mb-5" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {!isLogin && (
          <>
            <label className="block mb-2">Choose your role:</label>
            <select 
              className="p-2 w-[96%] border-2 rounded-xl mb-5"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </>
        )}
        
        <button 
          type="submit"
          disabled={loading}
          className="w-[96%] hover:scale-105 hover:text-white hover:bg-blue-500 cursor-pointer border-2 border-black duration-350 rounded-xl p-2 mb-2 disabled:opacity-50"
        >
          {loading ? 'Processing...' : (isLogin ? 'Login' : 'Register')}
        </button>
      </form>

      <p className="text-center mt-4">
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button
          onClick={() => {
            setIsLogin(!isLogin)
            setEmail('')
            setPassword('')
          }}
          className="text-blue-500 underline cursor-pointer hover:text-blue-700"
          type="button"
        >
          {isLogin ? 'Register here' : 'Login here'}
        </button>
      </p>
    </div>
  )
}

export default Login