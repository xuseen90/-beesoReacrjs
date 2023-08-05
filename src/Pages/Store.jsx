import React, { useEffect, useState } from 'react'

import Hero from '../Components/Hero'
import Product from '../Components/Product'
import Header from '../Components/Header'
import axios from 'axios'
import NotFound from './NotFound'
import Loading from '../Components/Loading'

const Store = () => {
  let storeName =
    window.location.href.split('/')[window.location.href.split('/').length - 1]

  const [storeStatus, setStoreStatus] = useState(0)

  useEffect(() => {
    async function getStore() {
      try {
        const res = await axios.post(
          `https://beso.onrender.com/api/store/checkStore/`,
          {
            store: storeName,
          },
        )
        setStoreStatus(res.status)
      } catch (error) {
        setStoreStatus(error.response.status)
      }
    }
    getStore()
  }, [])

  if (storeStatus === 0) return <Loading />

  return (
    <>
      {storeStatus === 200 ? (
        <>
          <Header />
          <Hero />
          <Product />
        </>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default Store
