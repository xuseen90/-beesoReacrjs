import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Store from './Pages/Store'
import Footer from './Components/Footer'
import ProductDetails from './Pages/ProductDetails'
import Checkout from './Pages/Checkout'
import NotFound from './Pages/NotFound'
import { StoreContext } from './Context/StoreContext'
import { useContext } from 'react'

const App = () => {
  const { store } = useContext(StoreContext)
  return (
    <div className=' overflow-x-hidden'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path={`${store.business_name}/product/:id`}
            element={<ProductDetails />}
          />
          <Route path='/:name' element={<Store />} />
          <Route
            path={`${store.business_name}/checkout`}
            element={<Checkout />}
          />
          <Route path='/notfound' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
