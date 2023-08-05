import React from 'react'
import { createContext } from 'react'

export const CheckStore = createContext()

const CheckStores = ({ children }) => {


  return <CheckStore>{children}</CheckStore>
}

export default CheckStores
