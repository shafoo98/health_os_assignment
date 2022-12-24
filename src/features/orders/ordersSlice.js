import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ordersList: [],
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      state.ordersList.push(action.payload)
      if (!JSON.parse(localStorage.getItem('orders'))) {
        localStorage.setItem('orders', JSON.stringify(Array.of(action.payload)))
      } else {
        const ordersTillNow = JSON.parse(localStorage.getItem('orders'))
        ordersTillNow.push(action.payload)
        localStorage.setItem('orders', JSON.stringify(ordersTillNow))
      }
    },
    getOrders: (state) => {
      return state.ordersList
    },
  },
})

export default ordersSlice.reducer

export const { createOrder, getOrders } = ordersSlice.actions
