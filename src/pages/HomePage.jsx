import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'


function HomePage() {

  return (
    <>
      <Header />
      <div className='h-screen bg-gradient-to-b from-orange-100 to-orange-300'>
        <h1 className='text-center text-5xl pt-10 mb-5'>Welcome To <Link to={"/"} className='text-orange-700 '>piggy<span className='text-orange-900'>.com</span></Link></h1>
        <p className='text-orange-900 text-2xl text-center m-5'>
        Effortless saving, tailored to your dreams. Piggy.com empowers you to stay on top of your goals with smart insights, flexible tools, and a user-friendly design. Make every penny count and build the future you deserve!
        </p>
        <Link to={"/transanctions"} className='bg-orange-600 text-white text-xl  rounded-xl m-auto flex justify-center w-72 mt-10 p-4'>Create a new Piggy Bank</Link>
      </div>
    </>
  )
}

export default HomePage