import React from 'react'

const H5 = ({className, content}) => {
  return (
    <h5 className={`font-dm text-base font-bold leading-praimary text-primary ${className}`}>{content}</h5>
  )
}

export default H5