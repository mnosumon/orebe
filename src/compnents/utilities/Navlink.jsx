import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = ({content, className, to}) => {
  return (
    <>
        <NavLink to={to} className={`text-sm font-normal font-dm text-[#767676] capitalize transform scale-150 [&.active]:text-red-500 [&.active]:font-bold ${className}`}>{content}</NavLink>
    </>
  )
}

export default Navlink