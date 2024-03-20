import React from 'react'

const H6 = ({content, className}) => {
  return (
    <h6 className={`font-dm text-sm font-bold leading-normal text-primary ${className}`}>{content}</h6>
  )
}

export default H6