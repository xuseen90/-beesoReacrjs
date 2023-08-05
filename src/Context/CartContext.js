import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const CartContexts = ({ children }) => {
  const [cart, setCart] = useState([])
  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalAmount = cart.reduce((total, currentTotal) => {
      return total + currentTotal.price * currentTotal.amount
    }, 0)
    setTotal(totalAmount)
  }, [cart])

  useEffect(() => {
    if (cart) {
      const CartAmount = cart.reduce((amount, currentAmount) => {
        return amount + currentAmount.amount
      }, 0)
      setItemAmount(CartAmount)
    }
  }, [cart])

  const addToCart = (products, Id) => {
    const newItem = { ...products, amount: 1 }
    // check if the already added to cart
    const cartItem = cart.find((item) => {
      return item.Id === Id
    })

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.Id === Id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      })

      setCart(newCart)
    } else {
      setCart([...cart, newItem])
      // console.log(...cart)
    }
  }

  const removeFromCart = (Id) => {
    const newCart = cart.filter((item) => {
      return item.Id !== Id
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const IncreaseItem = (Id) => {
    const cartItem = cart.find((item) => {
      return item.Id === Id
    })
    addToCart(cartItem, Id)
  }

  const decreaseItem = (Id) => {
    const cartItem = cart.find((item) => {
      return item.Id === Id
    })
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.Id === Id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeFromCart(Id)
    }
  }

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          clearCart,
          IncreaseItem,
          decreaseItem,
          itemAmount,
          total,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  )
}

export default CartContexts
