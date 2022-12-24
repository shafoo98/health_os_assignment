import { createSlice } from '@reduxjs/toolkit'
import { users } from '../../userData'

// Getting user from local storage
const user = JSON.parse(localStorage.getItem('user'))

const adminUser = JSON.parse(localStorage.getItem('adminUser'))

const initialState = {
  user: user ? user : null,
  adminUser: adminUser ? adminUser : null,
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
        if (user.isAdmin) {
          state.adminUser = user
          localStorage.setItem('adminUser', JSON.stringify(action.payload))
        } else {
          state.user = user
          localStorage.setItem('user', JSON.stringify(action.payload))
        }
      } else {
        state.error = 'Wrong Credentials! Please try again'
      }
    },
    logout: (state) => {
      if (state.user) {
        state.user = null
        localStorage.removeItem('user')
      } else {
        state.adminUser = null
        localStorage.removeItem('adminUser')
      }
    },
  },
})

export default authSlice.reducer

export const { register, login, logout } = authSlice.actions
