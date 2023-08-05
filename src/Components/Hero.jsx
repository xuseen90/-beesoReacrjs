import React from 'react'

const Hero = () => {
  return (
    <section className='text-white bg-[#111827] dark:bg-gray-900'>
      <div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className=' capitalize max-w-2xl mb-4 text-4xl font-bold  leading-loose md:text-5xl xl:text-6xl dark:text-white'>
            samsung Galaxy s23 ultra in 2023
          </h1>
          <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            Display. The Galaxy S23 Ultra is a feature-packed premium smartphone
            that boasts a large 6.8-inch WQHD+ Super AMOLED panel with excellent
            viewing angles
          </p>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Get Started
          </button>
        </div>
        <div className=' lg:mt-0 lg:col-span-5 flex'>
          <img
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
            alt='mockup'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
