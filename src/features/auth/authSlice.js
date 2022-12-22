import { createSlice } from '@reduxjs/toolkit'
import { users } from '../../userData'

// Getting user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user ? user : null,
  error: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      const existingPhoneNumber = users.find((user) => {
        return user.phoneNumber === action.payload.phoneNumber
      })
      if (existingPhoneNumber) {
        state.error = 'Phone Number Already Exists'
      } else {
        state.user = action.payload
        users.push(state.user)
        localStorage.setItem('user', JSON.stringify(state.user))
      }
    },
    login: (state, action) => {
      const user = users.find((user) => {
        return (
          user.phoneNumber === action.payload.phoneNumber &&
          user.password === action.payload.password
        )
      })
      if (user) {
        state.user = user
        localStorage.setItem('user', JSON.stringify(action.payload))
      } else {
        state.error = 'Wrong Credentials! Please try again'
      }
    },
    logout: (state) => {
      state.user = null
      localStorage.removeItem('user')
    },
  },
})

export default authSlice.reducer

export const { register, login, logout } = authSlice.actions
