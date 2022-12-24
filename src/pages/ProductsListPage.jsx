import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../features/products/productsSlice'

const ProductsListPage = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { adminUser } = useSelector((state) => state.auth)

  const { products } = useSelector((state) => state.products)

  useEffect(() => {
    if (!adminUser) {
      navigate('/login')
    }
    dispatch(getProducts())
  }, [adminUser, dispatch, navigate])

  const goToCreateProduct = () => {
    navigate('/admin/createProduct')
  }

  return (
    <>
      <div className='mt-16 flex justify-between items-center'>
        <h5 className='text-xl md:text-2xl lg:text-3xl'>Products</h5>
        <button
          onClick={goToCreateProduct}
          type='submit'
          className='my-10 sm:w-1/4 inline-block px-6 py-4 bg-blue-700 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        >
          Create Product
        </button>
      </div>

      <div className='mt-12 md:mt-20 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-10'>
        {products.map((product) => (
          /* Card Component */
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductsListPage
