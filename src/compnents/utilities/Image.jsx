import React from 'react'

const Image = ({sourc, alt, className}) => {
  return (
    <div className={className}>
        <img className='w-full h-full object-cover' src={sourc} alt={alt} />
    </div>
  )
}

export default Image