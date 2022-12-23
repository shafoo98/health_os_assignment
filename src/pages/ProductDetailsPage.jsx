import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductDetails } from '../features/products/productsSlice'
import { addItem } from '../features/cart/cartSlice'

const ProductDetailsPage = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { products } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProductDetails(id))
  }, [id, dispatch])

  const addToCart = ({ id, name, price }) => {
    dispatch(
      addItem({
        id,
        name,
        price,
        quantity: 1,
      })
    )
    navigate('/cart')
  }

  return (
    <div className='max-w-[960px] w-100 mx-auto my-0 px-[10px] py-0 sm:px-5'>
      {products.map((product) => (
        <div key={product.id}>
          <div className='flex mt-32 w-full h-96'>
            <img className='mx-auto' src={product.image} alt='' />
          </div>
          <div className='flex flex-col justify-evenly gap-5 mt-5'>
            <h1 className='text-2xl lg:text-3xl'>Name: {product.name}</h1>
            <p className='text-lg lg:text-xl md:text-clip'>
              <span>Description:</span> {product.description}
            </p>
            <h5 className='text-xl lg:text-2xl'>Price: ${product.price}</h5>
          </div>
          <button
            type='submit'
            onClick={() => addToCart(product)}
            className='my-10 w-full sm:w-3/4 inline-block px-6 py-4 bg-blue-700 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default ProductDetailsPage
