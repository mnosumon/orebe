import React from 'react'
import Navbar from '../compnents/layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../compnents/layouts/Footer'

const RouteLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RouteLayout