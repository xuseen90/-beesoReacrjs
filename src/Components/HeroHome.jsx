import React from 'react'
import bg from '../img/bg.png'

const HeroHome = () => {
  return (
    <>
      <div
        className='w-screen h-screen flex flex-col justify-center items-center bg-[#162447]'
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <h1 className='text-6xl font-bold text-center text-gray-100 leading-tight mb-4'>
          Build <span className='text-[#ffc107]'>Your</span> <br /> Online
          Business.{' '}
        </h1>
        <p className='text-gray-100  text-xl'>
          Bring Your Ideas To Live In Minutes
        </p>
      </div>
    </>
  )
}

export default HeroHome
