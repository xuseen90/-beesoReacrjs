import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ProductContexts from './Context/ProductContext'
import CartContexts from './Context/CartContext'
import StoreContexts from './Context/StoreContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <StoreContexts>
      <CartContexts>
        <ProductContexts>
          <App />
        </ProductContexts>
      </CartContexts>
    </StoreContexts>
  </React.StrictMode>,
)
