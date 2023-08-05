import React, { useContext } from 'react'
import Category from './Category'
import Products from './Products'
import { ProductContext } from '../Context/ProductContext'

const Product = () => {
  const { products } = useContext(ProductContext)

  return (
    <>
      <div className='py-10 mx-auto container w-[95%]'>
        <h3 className='text-center mb-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
          All Products
        </h3>
        <div className='flex flex-col lg:flex-row gap-x-4'>
          {/* 30% */}
          <div className='lg:w-[25%] w-full p-6'>
            <Category />
          </div>
          {/* 70% */}
          <div className='lg:w-[75%] w-full'>
            <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 p-4 my-3'>
              {products.map((product) => (
                <Products key={product.Id} product={product} />
              ))}
            </div>
          </div>
        </div>
        {/* products */}
      </div>
    </>
  )
}

export default Product
