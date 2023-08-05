import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='w-full bg-black text-white mt-8'>
        <div className='container mx-auto w-[80%]'>
          <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
            <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
              © 2023 Beeso.All Rights Reserved.
            </span>
            <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
              <li className='mr-4 hover:underline md:mr-6'>About</li>
              <li className='mr-4 hover:underline md:mr-6'>Privacy Policy</li>
              <li className='mr-4 hover:underline md:mr-6'>Licensing</li>
              <li className='hover:underline'>Contact</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
