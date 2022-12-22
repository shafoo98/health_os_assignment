import React, { useState } from 'react'
import { FaLock, FaPhone, FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { users } from '../userData'

const Login = () => {
  const newUsers = [...users]

  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    toast.info('Login Successful')
    // if (password !== confirmPassword) {
    //   toast.error("Passwords do not match");
    // } else {
    //   const userData = {
    //     name,
    //     email,
    //     password,
    //   };
    //   dispatch(register(userData));
    // }
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
              name='phone-number'
              placeholder='Enter your phone number'
              onChange={onChange}
              required={true}
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
