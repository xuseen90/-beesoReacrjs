import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()

const ProductContexts = ({ children }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProducts = async () => {
      let storeName =
        window.location.href.split('/')[
          window.location.href.split('/').length - 1
        ]
      if (storeName.endsWith('#')) {
        storeName = storeName.slice(0, -1) // remove last character
      }

      await axios
        .get(`https://beso.onrender.com/api/product/?storeName=${storeName}`)
        .then((resp) => {
          setProducts(resp.data)

          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    fetchProducts()
  }, [])

  return (
    <>
      <ProductContext.Provider value={{ products, loading }}>
        {children}
      </ProductContext.Provider>
    </>
  )
}

export default ProductContexts
