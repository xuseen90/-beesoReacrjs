import React, { useContext } from 'react'
import { GrSubtract, GrFormAdd } from 'react-icons/gr'
import { BsTrash } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

const Checkout = () => {
  const { cart, total, removeFromCart, IncreaseItem, decreaseItem } =
    useContext(CartContext)

  const navigate = useNavigate()
  return (
    <>
      <div className='w-full my-8'>
        <div className=' container mx-auto w-[80%]'>
          <h3 className=' text-H3Size font-normal leading-[24px] capitalize mb-3'>
            Checkout{' '}
            <span className='text-[12px] font-normal text-[#00000099] leading-[15px]'>
              (103)
            </span>{' '}
          </h3>
          <main className='flex flex-col lg:flex-row gap-x-4 w-full '>
            {/* products */}
            <div className=''>
              {cart.map((carts) => (
                <div className='w-full lg:w-[700px] lg:h-[250px] h-[300px] rounded border border-[#0000001A] px-[22px] mt-1'>
                  <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
                    {/* img */}
                    <div>
                      <img
                        className='p-8 rounded-t-lg w-[200px] object-contain'
                        src={carts.image}
                        alt='product image2'
                      />
                    </div>
                    {/* title */}
                    <div className=''>
                      <h5 className='text-xl  mb-3 md:mb-0 font-semibold tracking-tight text-gray-900 dark:text-white'>
                        {carts.name}
                      </h5>
                    </div>
                    {/* price */}
                    <div>
                      <h3 className='text-[20px] font-bold leading-5'>
                        ${parseFloat(carts.price).toFixed(2)}
                      </h3>
                    </div>
                  </div>

                  {/* Remove and Trash */}
                  <div className='flex justify-around items-center mt-0'>
                    {/* trash */}
                    <div
                      onClick={() => removeFromCart(carts.Id)}
                      className='flex items-center gap-x-2 cursor-pointer'
                    >
                      <BsTrash />
                      <span className=' font-semibold'>Remove</span>
                    </div>
                    {/* add or sub */}
                    <div>
                      <div
                        className='bg-white shadow cursor-pointer w-[85px] h-[35px] px-[10px] 
                          py-[9px] rounded flex items-center gap-3'
                      >
                        <span onClick={() => decreaseItem(carts.Id)}>
                          {' '}
                          <GrSubtract className='text-black' />
                        </span>
                        <span>{ carts.amount}</span>
                        <span onClick={() => IncreaseItem(carts.Id)}>
                          {' '}
                          <GrFormAdd className='text-black' />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* order summery */}
            <div className='lg:w-[550px] w-full  h-[430px] rounded border border-[#0000001A] my-2 px-6 py-2'>
              <h2 className=' capitalize text-[24px] font-bold text-[#00000099]'>
                order summary
              </h2>
              <div className='mt-4 mb-4'>
                <label htmlFor=''>Enter your phone</label>
                <input
                  type='text'
                  placeholder='25261000000'
                  className='w-full border border-[#0000001A] rounded'
                />
              </div>

              <div className='flex items-center justify-between border-b border-b-[#00000066] py-4'>
                <h3>Shipping Details</h3>
                <span className='text-[#000000B2] text-H4Size font-medium'>
                  Free
                </span>
              </div>

              <div className='flex items-center justify-between mt-6 mb-2'>
                <h3>Total</h3>
                <span>${parseFloat(total).toFixed(2)}</span>
              </div>

              <div className='mt-10'>
                <button className='w-full h-[47px] rounded-md text-H3Size  font-medium bg-[#FFDD55]'>
                  Buy Now
                </button>
              </div>

              <div className='mt-4'>
                <button
                  onClick={() => navigate(-1)}
                  type='button'
                  class='text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                >
                  Back
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Checkout
