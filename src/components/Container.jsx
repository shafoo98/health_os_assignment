import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='max-w-[1240px] w-100 mx-auto my-0 px-[10px] py-0 text-center sm:px-5'>
      {children}
    </div>
  )
}

export default Container
