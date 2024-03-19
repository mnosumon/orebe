import React from 'react'
import Navbar from '../compnents/layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../compnents/layouts/Footer'
import Header from '../compnents/layouts/Header'

const RouteLayout = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RouteLayout