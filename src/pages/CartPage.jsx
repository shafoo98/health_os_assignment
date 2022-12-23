import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartProduct from '../components/CartProduct'

const CartPage = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)

  const { user } = useSelector((state) => state.auth)

  const cartTotal = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2)

  const placeOrder = () => {
    console.log('Order Placed')
    // Dispatch a place order here
  }

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [dispatch, navigate, user])

  return cartItems.length === 0 ? (
    <div className='max-w-[1240px] w-100 mx-auto my-0 px-[10px] py-0 sm:px-5'>
      <h1 className='text-2xl lg:text-4xl mt-12'>No Items Added To Cart</h1>
    </div>
  ) : (
    <div className='max-w-[1240px] w-100 mx-auto my-0 px-[10px] py-0 sm:px-5'>
      <h1 className='text-2xl lg:text-4xl mt-12'>Cart Items</h1>
      {cartItems.map((cartItem, index) => (
        <div
          className='grid grid-cols-1 md:grid md:grid-cols-3 md:gap-5 md:my-8 items-center'
          key={index}
        >
          <CartProduct cartItem={cartItem} />
        </div>
      ))}
      <h3 className=' text-2xl lg:text-4xl mt-12 mb-4 '>Total: {cartTotal}</h3>
      <button
        type='submit'
        onClick={placeOrder}
        className='my-10 sm:w-1/2 inline-block px-6 py-4 bg-blue-700 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
      >
        Place Order
      </button>
    </div>
  )
}

export default CartPage
