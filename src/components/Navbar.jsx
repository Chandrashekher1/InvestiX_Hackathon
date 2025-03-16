import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className=''>
          <button className='mx-8 font-semibold text-xl p-2 cursor-pointer hover:bg-gray-100 px-4 p-2 rounded-sm'  >Log In</button>
          <button className='border p-2 px-4 font-semibold bg-blue-600 text-white rounded-sm hover:bg-blue-800 cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar