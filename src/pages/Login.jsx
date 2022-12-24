import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaLock, FaPhone } from 'react-icons/fa'
import { login } from '../features/auth/authSlice'

const Login = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const { phoneNumber, password } = formData

  const { user } = useSelector((state) => state.auth)

  const { adminUser } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      navigate('/')
    }
    if (adminUser) {
      navigate('/admin')
    }
  }, [adminUser, navigate, user])

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      phoneNumber,
      password,
      isAdmin: false,
    }
    if (userData) {
      dispatch(login(userData))
    } else {
      alert('Spmething went wrong')
      setFormData({
        phoneNumber: '',
        password: '',
      })
    }
  }

  return (
    <>
      <section className='mt-16'>
        <h1 className='text-4xl font-semibold mb-5'>Login</h1>
        <p className='text-lg text-[#828282]'>Please login to your account</p>
      </section>

      <section className='mx-auto my-0 h-screen'>
        <form
          onSubmit={onSubmit}
          className='w-100 border-solid border-2 border-[#e6e6e646] mt-12 px-8'
        >
          <div className='mt-24 flex items-center justify-center'>
            <FaPhone className='mr-[20px]' />
            <input
              type='number'
              className='w-full sm:w-3/4 p-3 border-b-[1px] border-solid border-[#e6e6e6]'
              id='phone-number'
              name='phoneNumber'
              placeholder='Enter your phone number'
              onChange={onChange}
              required={true}
              value={formData.phoneNumber}
            />
          </div>
          <div className='mt-24 flex items-center justify-center'>
            <FaLock className='mr-[20px]' />
            <input
              type='password'
              className='w-full sm:w-3/4 p-3 border-b-[1px] border-solid border-[#e6e6e6]'
              id='password'
              name='password'
              placeholder='Enter your password'
              onChange={onChange}
              required={true}
              value={formData.password}
            />
          </div>
          <div className='mt-24 flex items-center justify-center'>
            <button
              type='submit'
              className='mb-10 w-full sm:w-3/4 inline-block px-6 py-4 bg-blue-700 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-900 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
