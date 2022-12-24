import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../features/products/productsSlice'

const ProductsListPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    brand: '',
    category: '',
    price: 0,
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const { name, description, brand, category, price } = formData
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { adminUser } = useSelector((state) => state.auth)

  const { products } = useSelector((state) => state.products)

  useEffect(() => {
    if (!adminUser) {
      navigate('/login')
    }
  }, [adminUser, navigate])

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addProduct({
        id: products.length + 1,
        name,
        image: '/public/sample.jpg',
        description,
        brand,
        category,
        price,
      })
    )
    setFormData({
      name: '',
      description: '',
      brand: '',
      category: '',
      price: 0,
    })
    navigate('/admin/productsList')
  }

  return (
    <>
      <section className='mt-8'>
        <p className='text-lg text-[#828282]'>Create a new product</p>
      </section>

      <section className='mx-auto my-0 h-screen'>
        <form
          onSubmit={onSubmit}
          className='w-100 border-solid border-2 border-[#e6e6e646] mt-12 px-8'
        >
          <div className='mt-12 flex items-center justify-center'>
            <input
              type='text'
              className='w-full sm:w-3/4 p-3 border-b-[1px] border-solid border-[#e6e6e6]'
              id='name'
              name='name'
              placeholder='Enter Product Name'
              onChange={onChange}
              required={true}
              value={formData.name}
            />
          </div>
          <div className='mt-12 flex items-center justify-center'>
            <input
              type='text'
              className='w-full sm:w-3/4 p-3 border-b-[1px] border-solid border-[#e6e6e6]'
              id='description'
              name='description'
              placeholder='Enter a Short Product Description'
              onChange={onChange}
              required={true}
              value={formData.description}
            />
          </div>
          <div className='mt-12 flex items-center justify-center'>
            <input
              type='text'
              className='w-full sm:w-3/4 p-3 border-b-[1px] border-solid border-[#e6e6e6]'
              id='brand'
              name='brand'
              placeholder='Enter Product Brand'
              onChange={onChange}
              required={true}
              value={formData.brand}
            />
          </div>
          <div className='mt-12 flex items-center justify-center'>
            <input
              type='text'
              className='w-full sm:w-3/4 p-3 border-b-[1px] border-solid border-[#e6e6e6]'
              id='category'
              name='category'
              placeholder='Enter Product Category'
              onChange={onChange}
              required={true}
              value={formData.category}
            />
          </div>
          <div className='mt-12 flex items-center justify-center'>
            <input
              type='number'
              className='w-full sm:w-3/4 p-3 border-b-[1px] border-solid border-[#e6e6e6]'
              id='price'
              name='price'
              placeholder='Enter Product Price'
              onChange={onChange}
              required={true}
              value={formData.price}
            />
          </div>
          <div className='mt-12 flex items-center justify-center'>
            <button
              type='submit'
              className='mb-10 w-full sm:w-3/4 inline-block px-6 py-4 bg-blue-700 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            >
              Create Product
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default ProductsListPage
