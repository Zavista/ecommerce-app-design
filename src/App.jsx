import Home from './pages/Home'
import ProductList from './pages/ProductList'
import SingleProduct from './pages/SingleProduct'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<ProductList></ProductList>}></Route>
        <Route path='/product' element={<SingleProduct></SingleProduct>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App