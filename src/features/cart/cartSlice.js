import { createSlice } from '@reduxjs/toolkit'

const cartItemsFromStorage = JSON.parse(localStorage.getItem('cartItems'))

const initialState = {
  cartItems: cartItemsFromStorage ? cartItemsFromStorage : [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
      localStorage.removeItem('cartItems')
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => itemId !== item.id)
    },
    addItem: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      )
      if (existingCartItem) {
        // Increase the amount of the item
        existingCartItem.quantity += 1
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      } else {
        // It is a new cart item so we push it onto the cart
        state.cartItems.push(action.payload)
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      }
    },
  },
})

export default cartSlice.reducer

export const { clearCart, removeItem, addItem } = cartSlice.actions
