import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate(`/products/${product.id}`)
  }

  return (
    <div className='flex justify-center'>
      <div
        onClick={onClickHandler}
        className='rounded-lg shadow-lg bg-white max-w-sm'
      >
        <img className='rounded-t-lg' src={product.image} alt={product.name} />
        <div className='p-6'>
          <h5 className='text-gray-900 text-xl font-semibold mb-3'>
            {product.name}
          </h5>
          <p className='text-gray-700 text-base mb-4'>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
