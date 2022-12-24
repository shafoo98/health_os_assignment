import React from 'react'
import { useParams } from 'react-router-dom'

const OrderPage = () => {
  const { id } = useParams()

  const orderList = JSON.parse(localStorage.getItem('orders'))

  const order = orderList.find((order) => {
    return order.orderId === id
  })

  return (
    <div>
      <h1 className='text-xl lg:text-4xl lg:mt-16 text-left mt-8 ml-5'>
        Order No. {order.orderId}
      </h1>
      <h1 className='text-lg lg:text-2xl text-left mt-8 ml-5 lg:ml-10'>
        Order Details:
      </h1>
      <div className='mt-8 flex flex-col items-start ml-5 gap-4 lg:ml-10'>
        <h3 className='text-base lg:text-lg'>Phone Number: {order.user}</h3>
        <p className='text-base lg:text-lg'>Order Items: </p>
        {order.orderItems.map((orderItem) => (
          <ul
            className='ml-5 lg:ml-10 flex flex-col items-start'
            key={orderItem.id}
          >
            <li className='text-base lg:text-lg'>
              Product Name: {orderItem.name}
            </li>
            <li className='text-base lg:text-lg'>Price: {orderItem.price}</li>
            <li className='text-base lg:text-lg'>
              Quantity Ordered: {orderItem.quantity}
            </li>
          </ul>
        ))}
      </div>
      <h3 className='lg:mt-16 text-base lg:text-2xl text-end'>
        Total: {order.total}
      </h3>
    </div>
  )
}

export default OrderPage
