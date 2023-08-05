import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'
import { BsCartFill } from 'react-icons/bs'
import { CartContext } from '../Context/CartContext'
import { StoreContext } from '../Context/StoreContext'

const Header = () => {
  const { itemAmount } = useContext(CartContext)
  const { store } = useContext(StoreContext)

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <>
      <nav
        className={`${
          isActive && 'bg-black'
        } bg-black text-white w-full z-10 fixed`}
      >
        <div className=' relative container  w-[80%] flex items-center justify-between mx-auto p-4'>
          <div className='flex items-center'>
            <img src={store.business_logo} className='h-8' alt='beeso Logo' />
            <span className='self-center flex text-sm md:text-xl font-semibold whitespace-nowrap dark:text-white'>
              {store.business_name}
            </span>
          </div>
          {/* <button
            data-collapse-toggle='navbar-default'
            type='submit'
            className='inline-flex items-end p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img src={cancel} className='w-5 h-5' alt='cancel icon' />
            ) : (
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            )}
          </button> */}

          {/* laptop */}
          <ul className='font-medium flex  items-center justify-center p-4 md:p-0'>
            <li className='cursor-pointer hidden md:block py-2 pl-3 pr-4 text-white hover:text-white/60 transition-all duration-300'>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='cursor-pointer block py-2 pl-3 pr-4 text-white hover:text-white/60 transition-all duration-300'>
              <Link
                to={itemAmount > 0 ? `/${store.business_name}/checkout` : ''}
                className='flex items-center space-x-3 relative'
              >
                <span>Cart</span>
                <div className='relative'>
                  <BsCartFill />
                  <span className='text-red-500 text-2xl absolute -top-1 -right-2 bottom-0'>
                    {itemAmount}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
