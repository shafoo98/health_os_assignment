import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeItem } from '../features/cart/cartSlice'

const CartProduct = ({ cartItem }) => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const goToProduct = (id) => {
    navigate(`/products/${id}`)
  }

  const removeFromCart = (id) => {
    dispatch(removeItem(id))
  }

  return (
    <>
      <h1
        className='text-xl lg:text-2xl mt-12 cursor-pointer'
        onClick={() => {
          goToProduct(cartItem.id)
        }}
      >
        Name: {cartItem.name}
      </h1>
      <h6 className='text-xl lg:text-2xl mt-12'>Price: {cartItem.price}</h6>
      <div className='flex items-center justify-center'>
        <h6 className='text-xl lg:text-2xl mt-12 flex items-center justify-around'>
          Quantity: {cartItem.quantity}{' '}
          <AiFillDelete
            className='ml-8 md:ml-16'
            onClick={() => removeFromCart(cartItem.id)}
          />
        </h6>
      </div>
    </>
  )
}

export default CartProduct
