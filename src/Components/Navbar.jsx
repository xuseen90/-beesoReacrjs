import React, { useState } from 'react'
import logo from '../img/logo.png'
import cancel from '../img/close.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const nav = [
    {
      id: 1,
      path: '/',
      title: 'Home',
    },
    {
      id: 2,
      path: '/about',
      title: 'About',
    },
    {
      id: 3,
      path: '/contact',
      title: 'Contact',
    },
  ]

  return (
    <>
      <nav className='bg-black text-white border-gray-200 dark:bg-gray-900'>
        <div className=' container  w-[80%] flex flex-wrap items-center justify-between mx-auto p-4'>
          <div className='flex items-center'>
            <img src={logo} className='h-8 mr-2' alt='beeso Logo' />
            <span className='self-center hidden md:flex text-xl font-semibold whitespace-nowrap dark:text-white'>
              Beeso E-commerce
            </span>
          </div>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <img
                src={cancel}
                className='w-5 h-5 hover:bg-transparent'
                alt='cancel icon'
              />
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
          </button>
          <div className='hidden w-full lg:block lg:w-auto'>
            <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0'>
              {nav.map((navbar) => (
                <li
                  key={navbar.id}
                  className=' cursor-pointer block py-2 pl-3 pr-4 text-white hover:text-white/60 transition-all duration-300 rounded'
                >
                  {navbar.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
