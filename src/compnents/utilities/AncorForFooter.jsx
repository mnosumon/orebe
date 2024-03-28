import React from 'react'
import { Link } from 'react-router-dom'

const AncorForFooter = ({to, content}) => {
  return (
    <Link to={to} className='text-sm font-dm leading-praimary text-[#6D6D6D] font-normal inline-block capitalize'>{content}</Link>
  )
}

export default AncorForFooter