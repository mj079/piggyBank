import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='h-14 bg-orange-100 flex items-center justify-between'>
        <Link to={"/"} className='text-orange-700 text-2xl ml-2'>piggy<span className='text-orange-900'>.com</span></Link>
        <div className='hidden sm:inline text-orange-900 mr-2'>
          <Link className='mr-2'>Home</Link>
          <Link className='mr-2'>About</Link>
          <Link className='mr-2'>Contact Us</Link>
        </div>
    </div>
  )
}

export default Header