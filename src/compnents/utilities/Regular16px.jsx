import React from 'react'

const Regular16px = ({content,className}) => {
  return (
    <p className={`${className} font-dm text-[10px] sm:text-base leading-normal font-normal`}>{content}</p>
  )
}

export default Regular16px