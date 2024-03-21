import React from 'react'

const Image = ({sourc, alt, className}) => {
  return (
    <img className='w-full h-full object-cover' src={sourc} alt={alt} />
  )
}

export default Image