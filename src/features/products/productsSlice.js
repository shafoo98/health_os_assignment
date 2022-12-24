import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../productData'

// Run this line once and then remove
// localStorage.setItem('storeProducts', JSON.stringify(products))

const storeProducts = JSON.parse(localStorage.getItem('storeProducts'))

const initialState = {
  products: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state) => {
      state.products = [...storeProducts]
    },
    getProductDetails: (state, action) => {
      state.products = products.filter((product) => {
        return product.id === action.payload
      })
    },
    addProduct: (state, action) => {
      storeProducts.push(action.payload)
      localStorage.setItem('storeProducts', JSON.stringify(storeProducts))
    },
  },
})

export default productsSlice.reducer

export const { getProducts, getProductDetails, addProduct } =
  productsSlice.actions
