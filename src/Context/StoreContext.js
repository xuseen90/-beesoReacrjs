import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const StoreContext = createContext()

const StoreContexts = ({ children }) => {
  const [store, setStore] = useState([])
  // const [notFount, setNotFount] = useState(true)
  let urlStore =
    window.location.href.split('/')[window.location.href.split('/').length - 1]
  if (urlStore.endsWith('#')) {
    urlStore = urlStore.slice(0, -1) // remove last character
  }
  useEffect(() => {
    const fetchStore = async () => {
      await axios
        .get(`https://beso.onrender.com/api/store/?search=${urlStore}`)
        .then((res) => {
          setStore(res.data[0])
        })
    }
    fetchStore()
  }, [])
  return (
    <>
      <StoreContext.Provider value={{ store, urlStore }}>
        {children}
      </StoreContext.Provider>
    </>
  )
}

export default StoreContexts
