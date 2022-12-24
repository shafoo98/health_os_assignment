import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../features/products/productsSlice'

const AdminHomePage = () => {
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

  const goToProductsListPage = () => navigate('/admin/productsList')

  return (
    <>
      <h1 className='mt-16 text-center lg:text-4xl md:text-3xl text-2xl'>
        Dashboard
      </h1>
      <h5 className='mt-16 text-xl md:text-2xl lg:text-3xl text-left'>
        Products
      </h5>
      <div className='mt-12 md:mt-20 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-5'>
        {products.slice(0, products.length / 2).map((product) => (
          /* Card Component */
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button
        onClick={goToProductsListPage}
        type='submit'
        className='my-10 w-full sm:w-3/4 inline-block px-6 py-4 bg-blue-700 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
      >
        See All Products
      </button>
    </>
  )
}

export default AdminHomePage
