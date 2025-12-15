import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'

function App() {

  return (
     <div className="bg-[#0d1117] min-h-screen">
      <Header /> 
      <Products />
      <Footer />
    </div>
  )
}

export default App
