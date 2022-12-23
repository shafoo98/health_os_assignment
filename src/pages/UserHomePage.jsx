import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../features/products/productsSlice'

const UserHomePage = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const { products } = useSelector((state) => state.products)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    dispatch(getProducts())
  }, [dispatch, navigate, user])

  return (
    <>
      <h1 className='mt-16 text-3xl md:text-4xl lg:text-5xl'>Products</h1>
      <div className='mt-12 md:mt-20 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-5'>
        {products.map((product) => (
          /* Card Component */
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default UserHomePage
