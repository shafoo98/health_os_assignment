import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'

function Header() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const { adminUser } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  const onSubmit = () => {
    navigate('/cart')
  }

  return (
    <>
      <header className='flex max-w-[1240px] justify-between items-center h-24 mx-auto px-4 text-black'>
        <Link to='/'>
          <h1 className='w-full text-3xl font-semibold sm:mr-5'>Demo Store</h1>
        </Link>
        <ul className='hidden md:flex md:items-center md:justify-between'>
          {user || adminUser ? (
            <div className='md:flex md:justify-evenly md:items-center'>
              <li>
                <button
                  className='flex items-center hover:text-[#777]'
                  onClick={onSubmit}
                >
                  <BsFillCartFill className='mr-[5px]' />
                  Cart
                </button>
              </li>
              <li className='m-2 ml-5 font-medium'>
                <button
                  className='flex items-center hover:text-[#777]'
                  onClick={onLogout}
                >
                  <FaSignOutAlt className='mr-[5px]' /> Logout
                </button>
              </li>
            </div>
          ) : (
            <>
              <li className='m-2 ml-5 font-medium'>
                <Link
                  className='flex items-center hover:text-[#777]'
                  to='/login'
                >
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
            </>
          )}
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
            {user || adminUser ? (
              <div className='md:flex md:justify-evenly md:items-center'>
                <li className='m-2 ml-5 font-medium'>
                  <button
                    className='flex items-center hover:text-[#777]'
                    onClick={() => {}}
                  >
                    <BsFillCartFill className='mr-[5px]' />
                    <sup className='mr-[5px]'>1</sup>
                    Cart
                  </button>
                </li>
                <li className='m-2 ml-5 font-medium'>
                  <button
                    className='flex items-center hover:text-[#777]'
                    onClick={onLogout}
                  >
                    <FaSignOutAlt className='mr-[5px]' /> Logout
                  </button>
                </li>
              </div>
            ) : (
              <>
                <li className='m-2 ml-5 font-medium'>
                  <Link
                    className='flex items-center hover:text-[#777]'
                    to='/login'
                  >
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
              </>
            )}
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
