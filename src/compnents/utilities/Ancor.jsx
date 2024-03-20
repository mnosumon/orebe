import React from 'react'
import { Link } from 'react-router-dom'

const Ancor = ({className, content, href}) => {
  return (
    <Link to={href} className={`py-4 text-center font-dm text-sm font-bold leading-normal text-primary border border-[#2B2B2B] block hover:bg-primary hover:text-[#FFFFFF] ease-in-out duration-500 ${className}`}>{content}</Link>
  )
}

export default Ancor