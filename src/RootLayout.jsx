import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'

const RootLayout = () => {
  return (
    <div className='text-primary'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout