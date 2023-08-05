import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'

const Category = () => {
  const [cat, setCat] = useState([])

  useEffect(() => {
    const fetchCategory = async () => {
      let storeName =
        window.location.href.split('/')[
          window.location.href.split('/').length - 1
        ]
      if (storeName.endsWith('#')) {
        storeName = storeName.slice(0, -1) // remove last character
      }

      await axios
        .get(`https://beso.onrender.com/api/category?storeName=${storeName}`)
        .then((res) => setCat(res.data))
    }
    fetchCategory()
  }, [])

  const handleClick = (name) => {
    console.log('helllllllll' + name)
  }

  const [isShow, setIsShow] = useState(false)
  // Get store name

  return (
    <>
      <main>
        <h3
          onClick={() => setIsShow(!isShow)}
          className='mb-4 text-xl lg:hidden cursor-pointer font-semibold tracking-tight text-gray-900 dark:text-white'
        >
          Filter
        </h3>
        {/* mobile and Desktop Screen */}
        <div
          className={` ${isShow ? 'left-0' : ' -left-full'}
            w-[60%] h-full  transition-all duration-300 ease-in-out fixed inset-0 bg-gray-50 shadow-2xl z-10  flex items-center`}
        >
          <div className='flex items-center flex-col  gap-y-2 absolute top-12 left-4 sm:left-8'>
            <button
              className='mb-12 -ml-[80%] mt-0'
              onClick={() => setIsShow(!isShow)}
            >
              <FiX className='text-[25px] font-semibold text-gray-900' />
            </button>
            <h3 className='text-center mb-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
              All Category
            </h3>
            {cat.map((ct) => (
              <div
                key={ct.Id}
                className='flex items-center mb-4 cursor-pointer'
              >
                <input
                  id={`default-checkbox${ct.Id}`}
                  type='checkbox'
                  value=''
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  onClick={() => handleClick(ct.name)}
                  htmlFor={`default-checkbox${ct.Id}`}
                  className='ml-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  {ct.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* laptop  screen*/}
        <div className='hidden lg:block h-[400px] w-[320px] bg-gray-50  rounded-md p-3'>
          <h3 className='text-center mb-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
            All Category
          </h3>
          {cat.map((ct) => (
            <div key={ct.Id} className='flex items-center mb-4 cursor-pointer'>
              <input
                id={`default-checkbox${ct.Id}`}
                type='checkbox'
                value=''
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                onClick={() => handleClick(ct.name)}
                htmlFor={`default-checkbox${ct.Id}`}
                className='ml-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                {ct.name}
              </label>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Category
