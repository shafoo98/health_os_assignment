import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  //   const navigate = useNavigate()
  //   const dispatch = useDispatch()
  //   const { user } = useSelector((state) => state.auth)

  //   const onLogout = () => {
  //     dispatch(logout())
  //     dispatch(reset())
  //     navigate('/')
  //   }

  return (
    <>
      <header className='flex max-w-[1240px] justify-between items-center h-24 mx-auto px-4 text-black'>
        <Link to='/'>
          <h1 className='w-full text-3xl font-semibold sm:mr-5'>Demo Store</h1>
        </Link>
        <ul className='hidden md:flex md:items-center md:justify-between '>
          <li className='m-2 ml-5 font-medium'>
            <Link className='flex items-center hover:text-[#777]' to='/login'>
              <FaSignInAlt className='mr-[5px]' /> Login
            </Link>
          </li>
          <li className='m-2 ml-5 font-medium'>
            <Link
              className='flex items-center hover:text-[#777]'
              to='/register'
            >
              <FaUser className='mr-[5px]' /> Register
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-400 bg-white ease-in duration-300'
              : 'fixed ease-out duration-700 left-[-100%]'
          }
        >
          <div className='flex items-center pt-6 px-2'>
            <h1 className='w-full text-3xl font-semibold md:text-4xl'>
              Demo Store
            </h1>
          </div>
          <ul className='uppercase pt-10 flex flex-col items-center'>
            <li className='m-2 font-medium flex items-center justify-center'>
              <Link className='flex items-center hover:text-[#777]' to='/login'>
                <FaSignInAlt className='mr-[5px]' /> Login
              </Link>
            </li>
            <li className='m-2 font-medium flex items-center justify-center'>
              <Link
                className='flex items-center hover:text-[#777]'
                to='/register'
              >
                <FaUser className='mr-[5px]' /> Register
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
