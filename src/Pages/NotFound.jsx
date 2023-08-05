import React from 'react'
import img404 from '../img/404-computer.svg'

const NotFound = () => {
  return (
    <>
      <section className='flex items-center w-full  h-screen p-16 bg-[#111827] text-gray-100'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <img src={img404} alt='not found' className='w-[300px] h-[300px]' />
          <div className='max-w-md text-center '>
            <h2 className='font-extrabold text-9xl text-[#4B5563]'>
              <span className='sr-only'>Error</span>404
            </h2>
            <p className='text-2xl font-semibold md:text-3xl'>
              Sorry, we couldn't find this page.
            </p>
            <p className='my-2 text-gray-400'>
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <button className='px-8 py-3 font-semibold rounded bg-violet-400 text-[#111827]'>
              Back to homepage
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound
