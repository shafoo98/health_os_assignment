import { createSlice } from '@reduxjs/toolkit'

const allOrders = JSON.parse(localStorage.getItem('orders'))

const initialState = {
  orders: [],
  orderById: {},
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      state.orders.push(action.payload)
      localStorage.setItem('orders', JSON.stringify(state.orders))
    },
    getOrders: (state) => {
      return state.orders
    },
    getOrderById: (state, action) => {
      const orderId = action.payload
      const order = allOrders.find((order) => {
        return order.orderId === orderId
      })
      state.orderById = { ...order }
    },
  },
})

export default ordersSlice.reducer

export const { createOrder, getOrders, getOrderById } = ordersSlice.actions
