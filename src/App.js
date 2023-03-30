import './App.css'
import { Routes,Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Navbar from './components/NavBar'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App