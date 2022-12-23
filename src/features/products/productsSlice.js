import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../productData'

const initialState = {
  products: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state) => {
      state.products = [...products]
    },
    getProductDetails: (state, action) => {
      state.products = products.filter((product) => {
        return product.id === action.payload
      })
    },
  },
})

export default productsSlice.reducer

export const { getProducts, getProductDetails } = productsSlice.actions
