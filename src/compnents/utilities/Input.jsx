import React from 'react'

const Input = ({type, placeholder, value, name, id, className}) => {
  return (
    <input className={`text-sm leading-normal font-normal font-dm outline-none ${className}`} type={type} placeholder={placeholder} value={value} name={name} id={id}/>
  )
}

export default Input