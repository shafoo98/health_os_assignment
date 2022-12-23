import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getOrderById } from '../features/orders/ordersSlice'

const OrderPage = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    if (id) {
      dispatch(getOrderById(id))
    }
  }, [dispatch, id])

  const { orderById } = useSelector((state) => state.orders)

  return (
    <div>
      <h1>{orderById.orderId}</h1>
    </div>
  )
}

export default OrderPage
