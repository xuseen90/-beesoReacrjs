import React, { useContext } from 'react'
import { AiFillStar } from 'react-icons/ai'
// import { GrSubtract } from 'react-icons/gr'
// import { BiPlus } from 'react-icons/bi'
import RelatedProduct from './RelatedProduct'
import { ProductContext } from '../Context/ProductContext'
import { CartContext } from '../Context/CartContext'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SingleProduct = () => {
  const { products } = useContext(ProductContext)
  const { addToCart } =
    useContext(CartContext)

  const { id } = useParams()
  const product = products.find((item) => {
    return item.Id === parseInt(id)
  })

  const { price, name, image, Description, Id } = product

  const navigate = useNavigate()

  // const img1 = 'https://flowbite.com/docs/images/products/apple-watch.png'
  return (
    <>
      <div className='container mx-auto w-[80%] flex flex-col md:flex-row justify-between gap-6 mb-6'>
        <div className='mt-4'>
          <img
            className='object-contain w-[600px] rounded-md bg-gray-100'
            src={image}
            alt=''
          />
        </div>

        <div className='mt-4 mb-4'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
            {name}
          </h5>
          {/* star */}
          <div className='flex items-center gap-x-1'>
            <div className='flex items-center gap-x-[2px]'>
              <AiFillStar className='text-[#FFDD55]' />
              <AiFillStar className='text-[#FFDD55]' />
              <AiFillStar className='text-[#FFDD55]' />
              <AiFillStar className='text-[#FFDD55]' />
              <AiFillStar className='text-[#FFDD55]' />
            </div>
            <span className='text-[12px] leading-[13px] font-normal'>
              103 ratings
            </span>
          </div>

          {/* price */}
          <div className='mt-4'>
            <h2 className=' font-normal'>
              Price:{' '}
              <span className='font-bold'>${parseFloat(price).toFixed(2)}</span>{' '}
            </h2>
          </div>
          {/* Description: */}
          <div className='mt-4'>
            <p className='text-[#000000B2]'>Description:</p>
            <p className=' font-normal'>{Description}</p>
          </div>

          {/* add or sub */}
          <div className='flex items-center gap-x-4 mt-8'>
            {/* <div className='bg-[#F2F2F2]  cursor-pointer w-[111px] h-[45px] px-[14px] py-[13px] rounded flex items-center gap-[25px]'>
              <GrSubtract
                onClick={() => decreaseItem(Id)}
                className='text-6xl text-[#00000080] font-semibold'
              />
              <span>{1}</span>
              <BiPlus
                onClick={() => console.log(IncreaseItem(Id))}
                className='text-[#00000080] text-9xl font-semibold'
              />
            </div> */}

            <button
              onClick={() => addToCart(product, Id)}
              className='w-full h-[45px] font-medium rounded bg-[#83DDE3] text-black text-[14px] flex justify-center items-center'
            >
              Add To Cart
            </button>
          </div>
          {/* buy now */}
          <div className='flex items-center gap-x-4'>
            <div className='mt-6 w-[70%]'>
              <Link to={'/checkout'}>
                <button className='w-full h-[47px] rounded-md text-[18px]  font-medium bg-[#FFDD55]'>
                  Buy Now{' '}
                </button>
              </Link>
            </div>

            <div className='w-[30%] mt-6'>
              <button
                onClick={() => navigate(-1)}
                type='button'
                className='text-white w-full h-[40px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              >
                Back
              </button>
            </div>
          </div>

          {/* add wishlist */}

          {/* size */}
          {/* <div className='mt-4'>
            <h3 className='text-black text-PSize'>Sizes:</h3>
            <div className='flex gap-x-8 mt-2'>
              <span className='border border-[#58BAC0] px-8 py-1'>41</span>
              <span className='border border-[#0000001A] px-8 py-1'>43</span>
              <span className='border border-[#0000001A] px-8 py-1'>44</span>
            </div>
          </div> */}
        </div>
      </div>
      <RelatedProduct />
    </>
  )
}

export default SingleProduct
